import { observer } from "mobx-react-lite";
import { useEffect, useMemo, useState } from "react";

import styled from "styled-components";
import { store } from "../../../stores/store";
import Button from "../../ui/Button";

const makeHint = (isSupported: boolean, permission?: NotificationPermission): string => {
  if (!isSupported) return "Уведомления не поддерживаются в этом браузере";
  if (permission === "denied")
    return "Уведомления отключены. Для тестирования, необходимо разрешить уведомления для данного сайта в настройках браузера";
  return "";
};
const sendNotification = (registration: ServiceWorkerRegistration) => {
  const title = store.title;
  const options = store.options ?? undefined;
  registration
    .showNotification(title, options)
    .then(() => console.log("success"))
    .catch((error) => console.log(error));
};

interface IPropsContainer {
  children: React.ReactNode;
  $margin?: string;
}
interface IProps {
  $margin?: string;
}

const Container = styled.div<IPropsContainer>`
  margin: ${(props) => props.$margin || "0"};
`;

const Hint = styled.p`
  margin-top: 0.25rem;
  text-align: center;
  font-size: 0.75rem;
  color: var(--color-error);
`;
const NotificationSender = observer(({ $margin }: IProps) => {
  const [isSupported, setIsSupported] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration>();

  const [permission, setPermission] = useState<NotificationPermission>();
  const hint = useMemo(() => makeHint(isSupported, permission), [isSupported, permission]);
  const disabled = !isSupported || permission === "denied" || !store.title || !registration;

  const handleClick = async () => {
    if (permission === "granted" && registration) {
      sendNotification(registration);
      return;
    }

    const newPermissions = await Notification.requestPermission();
    setPermission(newPermissions);
    if (newPermissions === "granted" && registration) sendNotification(registration);
  };
  useEffect(() => {
    if ("serviceWorker" in navigator && "Notification" in window) {
      setIsSupported(true);
      setPermission(Notification.permission);
      navigator.serviceWorker.ready.then((registration) => setRegistration(registration));
    } else {
      console.log("This browser does not support serviceWorker or notification");
    }
  }, []);

  return (
    <Container $margin={$margin}>
      <Button disabled={disabled} onClick={handleClick} $width="100%">
        Send notification
      </Button>

      <Hint>{hint}</Hint>
    </Container>
  );
});

export default NotificationSender;

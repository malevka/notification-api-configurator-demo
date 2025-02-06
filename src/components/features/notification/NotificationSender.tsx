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
const sendNotification = () => {
  const title = store.title;
  const options = store.options ?? undefined;
  new Notification(title, options);
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
const NotificationSender = observer(({ $margin }: IProps) => {
  const [isSupported, setIsSupported] = useState(false);

  const [permission, setPermission] = useState<NotificationPermission>();
  const hint = useMemo(() => makeHint(isSupported, permission), [isSupported, permission]);

  const handleClick = async () => {
    if (permission === "granted") {
      sendNotification();
      return;
    }

    const newPermissions = await Notification.requestPermission();
    setPermission(newPermissions);
    if (newPermissions === "granted") sendNotification();
  };
  useEffect(() => {
    if ("Notification" in window) {
      setIsSupported(true);
      setPermission(Notification.permission);
    } else {
      console.log("This browser does not support desktop notification");
    }
  }, []);

  return (
    <Container $margin={$margin}>
      <Button disabled={!isSupported || permission === "denied" || !store.title} onClick={handleClick} $width="100%">
        Send notification
      </Button>

      <p>{hint}</p>
    </Container>
  );
});

export default NotificationSender;

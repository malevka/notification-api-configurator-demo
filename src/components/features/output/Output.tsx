import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { store } from "../../../stores/store";
import FlexContainer from "../../ui/FlexContainer";

const Output = observer(() => {
  return (
    <Wrapper>
      {store.title && (
        <>
          <pre>/* Notification params */</pre>
          <br />
          <pre>const title = {store.title};</pre>
        </>
      )}
      {store.options && (
        <FlexContainer>
          <pre>const options =</pre>
          <pre>{JSON.stringify(store.options, null, 2)}; </pre>
        </FlexContainer>
      )}
      {store.title && (
        <>
          <br />
          <br />
          <br />
          <pre>/* Send notification */</pre>
          <br />
          <pre>{store.options ? "new Notification(title, options)" : "new Notification(title)"}</pre>
        </>
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  background-color: var(--output-background);
  border-radius: 0.25rem;
  padding: 1rem;
  min-height: 20rem;
`;

export default Output;

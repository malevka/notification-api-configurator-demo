import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { store } from "../../../stores/store";
import FlexContainer from "../../ui/FlexContainer";

const Output = observer(() => {
  return (
    <Wrapper>
      {store.title && <Paragraph>const title = {store.title};</Paragraph>}
      {store.options && (
        <FlexContainer>
          <Paragraph>const options = {JSON.stringify(store.options, null, 2)}; </Paragraph>
        </FlexContainer>
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  background-color: var(--output-background);
  border-radius: 0.25rem;
  padding: 2.5rem;
  min-height: 19.25rem;
  height: 1px;
`;

const Paragraph = styled.pre`
  margin-bottom: 1rem;
`;
export default Output;

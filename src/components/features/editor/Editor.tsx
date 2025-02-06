import { useForm } from "react-hook-form";
import styled from "styled-components"; /*
import { Button } from "antd";
import styled from "styled-components"; */
import { store } from "../../../stores/store";

import { observer } from "mobx-react-lite";
import Button from "../../ui/Button";

interface IEditorInput {
  title: string;
  body: string;
  icon: string;
  image: string;
}
const Editor = observer(() => {
  const { register, handleSubmit, reset } = useForm<IEditorInput>();

  const onSubmit = (data: IEditorInput) => {
    const title = data.title;
    const body = data.body;
    const icon = data.icon;
    store.setField("title", title);
    store.setField("body", body);
    store.setField("icon", icon);
  };

  return (
    <>
      <form>
        <Label>Title</Label>
        <Input {...register("title", { required: true })} />
        <Label>Body</Label>
        <Input {...register("body")} />
        <Label>Icon</Label>
        <Input {...register("icon")} />
        <Label>Image</Label>
        <Input {...register("image")} />

        {/* <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> */}
        {/* <Button type="primary">Button</Button>
      <StyledButton type="primary">Styled Button</StyledButton> */}
        {/* <button>Generate</button> */}
      </form>

      <Button onClick={handleSubmit(onSubmit)} $width="100%" $margin="0 0 1.5rem 0">
        Generate config
      </Button>
      <Button
        onClick={() => {
          reset();
          handleSubmit(onSubmit)();
        }}
        $width="100%">
        Reset
      </Button>
    </>
  );
});

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
`;

export default Editor;

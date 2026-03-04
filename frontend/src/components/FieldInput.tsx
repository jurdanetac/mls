import type { FieldInputProps } from "../types";

function FieldInput(props: FieldInputProps) {
  const type = props.type;
  const label = props.label;
  const inputId = props.inputId;
  const onChange = props.onChange;

  return (
    <div>
      <label htmlFor={inputId}>{label}: </label>
      <input
        id={inputId}
        type={type}
        onChange={(event) => onChange(event)}
      ></input>
    </div>
  );
}

export default FieldInput;

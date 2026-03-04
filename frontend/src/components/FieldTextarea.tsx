import type { FieldInputProps } from "../types";

const FieldTextarea = (props: FieldTextareaProps) => {
  const label = props.label;
  const inputId = props.inputId;
  const onChange = props.onChange;

  return (
    <div>
      <label htmlFor={inputId}>{label}: </label>
      <textarea id={inputId} onChange={(event) => onChange(event)}></textarea>
    </div>
  );
};

export default FieldTextarea;

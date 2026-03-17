import type { FieldTextareaProps } from "../types";

const FieldTextarea = (props: FieldTextareaProps) => {
  const label = props.label;
  const inputId = props.inputId;
  const onChange = props.onChange;
  const labelStyle = props.labelStyle || {};

  return (
    <div>
      <label htmlFor={inputId} style={labelStyle}>
        {label}:{" "}
      </label>
      <textarea id={inputId} onChange={(event) => onChange(event)}></textarea>
    </div>
  );
};

export default FieldTextarea;

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

type TexareaFieldProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  description?: string;
  // This allows you to pass other standard input props like value, onChange, etc.
  [key: string]: any;
};

const TextareaField = ({
  label,
  id,
  type = "text",
  placeholder,
  description,
  ...props
}: TexareaFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <FieldDescription>{description}</FieldDescription>
      <Textarea id={id} placeholder={placeholder} {...props} />
    </Field>
  );
};

export default TextareaField;

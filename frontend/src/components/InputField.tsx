import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type InputFieldProps = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  description?: string;
  // This allows you to pass other standard input props like value, onChange, etc.
  [key: string]: any;
};

const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  description,
  ...props
}: InputFieldProps) => {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...props} // Spreads remaining props like value or onChange onto the Input
      />
      {description && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
};

export default InputField;

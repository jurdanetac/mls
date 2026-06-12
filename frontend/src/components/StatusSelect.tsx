import MembersIcon from "@/components/MembersIcon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status, type TemplateProps } from "@/types";

export const formatStatusLabel = (str: string): string => {
  return str
    .split("_")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
};

type StatusSelectProps = {
  form: TemplateProps;
  handleFormChange: <K extends keyof TemplateProps>(
    field: K,
    value: TemplateProps[K],
  ) => void;
};

const StatusSelect = ({ form, handleFormChange }: StatusSelectProps) => {
  return (
    <div className="flex gap-3 items-center mb-5">
      <Select
        value={form.status}
        onValueChange={(value: string) =>
          handleFormChange("status", value as Status)
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            {/* Option for each Status label: db value */}
            {Object.entries(Status).map(([key, value]) => (
              <SelectItem key={key} value={value}>
                {formatStatusLabel(key)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <MembersIcon status={form.status} />
      </div>
    </div>
  );
};

export default StatusSelect;

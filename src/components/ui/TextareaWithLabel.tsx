import { Label } from "./label";
import { Textarea } from "./textarea";

interface TextareaWithLabelProps {
  id: string;
  label: string;
  value: string;
  changeHandler: (value: string) => void;
}

export function TextareWithLabel({ id, label, value, changeHandler }: TextareaWithLabelProps) {
  return (
    <div>
      <Label id={id}>{label}</Label>
      <Textarea id={id} value={value} onChange={(e) => changeHandler(e.target.value)} />
    </div>
  )
}
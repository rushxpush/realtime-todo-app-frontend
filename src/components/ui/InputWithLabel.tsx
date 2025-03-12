import { Input } from "./input";
import { Label } from "./label";

interface InputWithLabelProps {
  id: string;
  type: string;
  label: string;
  value: string;
  changeHandler: (value: string) => void;
}

export function InputWithLabel({ id, type, label, value, changeHandler }: InputWithLabelProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={(e) => changeHandler(e.target.value)} />
    </div>
  );
}
import { Button } from "antd";

import './NewButton.css'

interface NewButtonProps {
  label?: string;
  backgroundColor?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  onSubmit?: () => void;
}

export const NewButton = ({
  label,
  backgroundColor,
  size,
  color,
  onSubmit,
  ...props
}: NewButtonProps) => (
  <Button
    className={`newbutton--${size}`}
    style={{ backgroundColor, color }}
    {...props}
    onClick={onSubmit}
  >
    {label}
  </Button>
);

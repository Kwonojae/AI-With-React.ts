import { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({
  text,
  className,
  type = "button",
  children,
  onClick,
}) => {
  return (
    <button type={type} className={`${className}`} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;

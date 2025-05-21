import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@shared/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "active";
  className?: string;
}

const Button = ({ children, variant = "default", className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-2 py-1 rounded border border-transparent hover:border-[#F0E0E0] cursor-pointer",
        {
          "border-[#F0E0E0]": variant === "active",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

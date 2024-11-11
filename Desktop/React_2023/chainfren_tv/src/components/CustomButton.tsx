import React from "react";

interface AuthButtonProps {
  icon?: React.ElementType;
  label: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  iconStyle?: string;
}
const AuthButton = ({
  icon: Icon,
  label,
  className,
  children,
  iconStyle,
  ...props
}: AuthButtonProps) => {
  return (
    <button
      className={`flex items-center w-full justify-center border-[#101114] gap-2  bg-background-gray px-4 py-2 rounded-md ${className}`}
      {...props}
    >
      {Icon && <Icon className={`${iconStyle} h-full flex`} />}
      <span className="text-primary-text text-base font-medium">{label}</span>
      {children}
    </button>
  );
};

export default AuthButton;

export const Button = ({
  label,
  className,
  ...props
}: AuthButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`flex items-center w-[24.625rem] justify-center border-[#101114] gap-2  bg-main-blue px-4 py-2 rounded-md ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

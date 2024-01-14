import clsx from 'clsx';
import { FC } from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  preset: keyof typeof ButtonPreset;
}

export const Button:FC<ButtonProps> = (props) => {
  const {text, preset, children, className, onClick, disabled, ...rest} = props

  return (
    <button
      className={clsx(
        'rounded-[12px] w-[220px] h-[40px] text-p4',
        ButtonPreset[preset],
        disabled ? 'opacity-20 disabled:pointer-events-none':'',
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {text}
      {children}
    </button>
  );
};

const ButtonPreset = {
  primary: 'bg-primary-100 text-white font-medium hover:bg-primary-80 focus:border-2 focus:border-background-black focus:ring-[2px] focus:ring-primary-100 focus:bg-primary-100',
  secondary: 'bg-secondary-100 text-white font-medium hover:bg-secondary-80 focus:border-2 focus:border-background-black focus:ring-[2px] focus:ring-primary-100 focus:bg-secondary-100',
  success: 'bg-success-100 text-white font-medium hover:bg-success-80 focus:border-2 focus:border-background-black focus:ring-[2px] focus:ring-primary-100 focus:bg-success-100',
  warning: 'bg-warning-100 text-white font-medium hover:bg-warning-80 focus:border-2 focus:border-background-black focus:ring-[2px] focus:ring-primary-100 focus:bg-warning-100',
  error: 'bg-error-100 text-white font-medium hover:bg-error-80 focus:border-2 focus:border-background-black focus:ring-[2px] focus:ring-primary-100 focus:bg-error-100',
}
import clsx from 'clsx';
import { FC } from "react";
import {Text} from './text'

interface BadgeProps{
  text?: string;
  preset: keyof typeof BadgePreset;
  className?: string;
}

export const Badge:FC<BadgeProps> = (props) => {
  const {text, preset, className, ...rest} = props

  return (
    <div
      className={clsx(
        'rounded-[6px] px-[10px] h-[28px] flex items-center justify-center border-2 font-medium',
        BadgePreset[preset],
        className
      )}
      {...rest}
    >
        <Text text={text} preset='p4'/>
    </div>
  );
};

const BadgePreset = {
  primary: 'text-primary-100 border-primary-100',
  secondary: 'text-secondary-100 border-secondary-100',
  success: 'text-success-100 border-success-100',
  warning: 'text-warning-100 border-warning-100',
  error: 'text-error-100 border-error-100',
}
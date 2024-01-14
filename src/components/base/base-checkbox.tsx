import clsx from 'clsx';
import { FC, useState } from "react";
import {CheckIcon} from '@heroicons/react/24/outline'
import {Text} from './text'

interface CheckboxProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  desc?: string;
  preset: keyof typeof CheckboxPreset;
  className?: string;
}

export const BaseCheckbox:FC<CheckboxProps> = (props) => {
  const [isTick, setisTick] = useState(false)
  const {label, desc, preset, className, disabled, ...rest} = props

  return (
    <div className='relative flex gap-2 items-center'>
      <button
        className={clsx(
          'rounded-[4px] h-[18px] w-[18px] flex items-center justify-center border-2 hover:border-primary-100 focus:ring-[1px] focus:ring-primary-100 focus:ring-offset-1 focus:ring-offset-background-black',
          isTick ? 'text-white border-primary-100 bg-primary-100 hover:bg-primary-80 hover:border-primary-80' : 'border-secondary-100',
          CheckboxPreset[preset],
          disabled ? 'opacity-20 disabled:pointer-events-none':'',
          className
        )}
        onClick={()=>setisTick(!isTick)}
        disabled={disabled}
        {...rest}
      >
          {isTick ? 
              <CheckIcon className='w-3 h-3'/>
          : null }
      </button>
      {label ? 
        <Text
          preset='p4'
          text={label}
          className={clsx(disabled ? 'opacity-20 disabled:pointer-events-none':'')}
        />
      : null }
      {desc ?
        <Text
          preset='p4'
          text={desc}
          className={clsx('absolute left-[26px] top-6 text-secondary-60', disabled ? 'opacity-20 disabled:pointer-events-none':'')}
        />
      : null}
    </div>
  );
};

const CheckboxPreset = {
  base: '',
}
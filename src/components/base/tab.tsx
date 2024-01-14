import { FC } from 'react';
import { clsx } from 'clsx';

interface TabProps {
    text: string;
    preset: keyof typeof TabPreset;
    className?: string;
}

export const Tab:FC<TabProps> = (props) => {
    const {text, preset, className} = props
    return (
        <div className={clsx(
            'p-4 w-fit',
            TabPreset[preset],
            className
        )}>
        {text}
      </div>
    );
  };

  const TabPreset = {
    base: 'text-p4 font-semibold',
    header: 'border-b-4 border-transparent hover:border-primary-100 text-p4',
  }
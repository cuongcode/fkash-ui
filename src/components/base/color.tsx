import {Text} from './text'
import clsx from 'clsx';

export const Color = () => {
    return (
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2'>
          <Text text='Primary Color' preset='p3'/>
          <div className='flex justify-between'>
            <ColorPalette className='bg-primary-100' />
            <ColorPalette className='bg-primary-80'/>
            <ColorPalette className='bg-primary-60'/>
            <ColorPalette className='bg-primary-40'/>
            <ColorPalette className='bg-primary-20'/>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Text text='Base Color' preset='p3'/>
          <div className='flex justify-between'>
            <ColorPalette className='bg-base-100' />
            <ColorPalette className='bg-base-80'/>
            <ColorPalette className='bg-base-60'/>
            <ColorPalette className='bg-base-40'/>
            <ColorPalette className='bg-base-20'/>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Text text='Succes Color' preset='p3'/>
          <div className='flex justify-between'>
            <ColorPalette className='bg-success-100' />
            <ColorPalette className='bg-success-80'/>
            <ColorPalette className='bg-success-60'/>
            <ColorPalette className='bg-success-40'/>
            <ColorPalette className='bg-success-20'/>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Text text='Succes Color' preset='p3'/>
          <div className='flex justify-between'>
            <ColorPalette className='bg-error-100' />
            <ColorPalette className='bg-error-80'/>
            <ColorPalette className='bg-error-60'/>
            <ColorPalette className='bg-error-40'/>
            <ColorPalette className='bg-error-20'/>
          </div>
        </div>
      </div>
    );
  };

  const ColorPalette = ({className}:{className:string}) => {
    return (
      <div className={clsx('w-24 h-24 rounded-lg', className)} />
    );
  };
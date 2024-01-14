import React from 'react';
import { BaseCheckbox } from '../base'

export const CheckboxSection = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-5'>
                    <BaseCheckbox preset='base'/>
                    <BaseCheckbox preset='base' disabled/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-5'>
                    <BaseCheckbox preset='base' label='Label'/>
                    <BaseCheckbox preset='base' label='Label' disabled/>
                </div>
            </div>
        </div>
    );
};
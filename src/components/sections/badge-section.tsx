import React from 'react';
import { Text, Badge } from '../base'

export const BadgeSection = () => {
    return (
        <div className='flex gap-5'>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-5'>
                    <Badge preset='primary' text='BRAND'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-5'>
                    <Badge preset='secondary' text='NEUTRAL'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-5'>
                    <Badge preset='success' text='SUCCESS'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-5'>
                    <Badge preset='warning' text='WARNING'/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-5'>
                    <Badge preset='error' text='ERROR'/>
                </div>
            </div>
        </div>
    );
};
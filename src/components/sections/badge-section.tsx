import React from 'react';
import { Badge } from '../base'

export const BadgeSection = () => {
    return (
        <div className='flex gap-5'>
            <Badge preset='primary' text='BRAND'/>
            <Badge preset='secondary' text='NEUTRAL'/>
            <Badge preset='success' text='SUCCESS'/>
            <Badge preset='warning' text='WARNING'/>
            <Badge preset='error' text='ERROR'/>
        </div>
    );
};
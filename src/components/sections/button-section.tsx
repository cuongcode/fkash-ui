import React from 'react';
import { Text, Button } from '../base'

export const ButtonSection = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <Text text='Primary' preset='h5'/>
                <div className='flex gap-5'>
                    <Button preset='primary' text='Buy BTC'/>
                    <Button preset='primary' text='Buy BTC' disabled/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Text text='Secondary' preset='h5'/>
                <div className='flex gap-5'>
                    <Button preset='secondary' text='Buy BTC'/>
                    <Button preset='secondary' text='Buy BTC' disabled/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Text text='Success' preset='h5'/>
                <div className='flex gap-5'>
                    <Button preset='success' text='Buy BTC'/>
                    <Button preset='success' text='Buy BTC' disabled/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Text text='Warning' preset='h5'/>
                <div className='flex gap-5'>
                    <Button preset='warning' text='Buy BTC'/>
                    <Button preset='warning' text='Buy BTC' disabled/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <Text text='Error' preset='h5'/>
                <div className='flex gap-5'>
                    <Button preset='error' text='Buy BTC'/>
                    <Button preset='error' text='Buy BTC' disabled/>
                </div>
            </div>
        </div>
    );
};
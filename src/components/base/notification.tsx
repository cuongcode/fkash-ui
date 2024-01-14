import { FC } from "react";
import { Text, Button } from '../base'
import { ExclamationCircleIcon, CheckCircleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface NotificationProps {
    preset: keyof typeof NotificationPreset;
    desc?: string;
}

export const Notification:FC<NotificationProps> = (props) => {
    const {preset, desc} = props
    return (
        <div className="flex flex-col w-64 bg-background-gray p-4 rounded-xl gap-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {NotificationPreset[preset].icon}
                    <Text preset="p4" text={NotificationPreset[preset].text} />
                </div>
                <Button preset="base">
                    <XMarkIcon className="w-5 h-5 text-secondary-100"/>
                </Button>
            </div>
            {desc ? <Text preset="p4" text={desc} className="text-secondary-100"/> : null}
        </div>
    );
};

const NotificationPreset = {
    info: {
        icon: <InformationCircleIcon className="w-6 h-6 text-primary-80" />,
        text: 'Information'
    }, 
    success: {
        icon: <CheckCircleIcon className="w-6 h-6 text-success-80" />,
        text: 'Success'
    },
    error: {
        icon: <XCircleIcon className="w-6 h-6 text-error-80" />,
        text: 'Error'
    },
    warning: {
        icon: <ExclamationCircleIcon className="w-6 h-6 text-warning-80" />,
        text: 'Warning'
    } 
}
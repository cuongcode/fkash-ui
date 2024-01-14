import { Notification } from "../base";

export const NotificationSection = () => {
    return (
        <div className='grid grid-cols-2 gap-y-3'>
            <Notification preset='info'/>
            <Notification preset='success'/>
            <Notification preset='warning'/>
            <Notification preset='error'/>
            {/* <Notification preset='info' desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum congue nisi non mollis."/>
            <Notification preset='success'/>
            <Notification preset='warning'/>
            <Notification preset='error'/> */}
        </div>
    );
};


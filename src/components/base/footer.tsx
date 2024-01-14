import { Text } from './text'
import { Tab } from './tab'

export const Footer = () => {
    return (
      <div className='flex flex-col items-center pb-7'>
        <div className='flex'>
          <Tab preset='base' text='Fearures'/>
          <Tab preset='base' text='Works'/>
          <Tab preset='base' text='Blog'/>
          <Tab preset='base' text='Help'/>
          <Tab preset='base' text='Contact'/>
          <Tab preset='base' text='About'/>
        </div>
        <Text preset='p5' text='© All rights Reserved. Cuong Nguyen.' />
      </div>
    );
  };
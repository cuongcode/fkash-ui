import { Button } from './button'
import { Text } from './text'
import { Tab } from './tab'

export const Header = () => {
    return (
      <div className='flex border-b border-gray-600 items-center'>
        <Text preset='p1' text='Fkash UI' className='border-b-4 border-transparent text-primary-100 font-bold mr-4'/>
        <Tab preset='header' text='Portfolio'/>
        <Tab preset='header' text='Dashboard'/>
        <Tab preset='header' text='Market'/>
        <Tab preset='header' text='Currencies'/>
        <Tab preset='header' text='Career'/>
        <Tab preset='header' text='About'/>
        <Button preset='primary' text='Sign In' className='w-32 ml-4 hidden lg:block'/>
      </div>
    );
  };
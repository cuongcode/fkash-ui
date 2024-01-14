import { Button} from './button'
import { Text} from './text'

export const Header = () => {
    return (
      <div className='flex border-b border-gray-600 items-center'>
        <Text preset='p1' text='Fkash UI' className='border-b-4 border-transparent text-primary-100 font-bold mr-4'/>
        <Tab text='Portfolio'/>
        <Tab text='Dashboard'/>
        <Tab text='Market'/>
        <Tab text='Currencies'/>
        <Tab text='Career'/>
        <Tab text='About'/>
        <Button preset='primary' text='Sign In' className='w-32 ml-4 hidden lg:block'/>
      </div>
    );
  };
  
  const Tab = ({text}:{text:string}) => {
    return (
      <div className='p-4 border-b-4 border-transparent hover:border-primary-100 w-fit'>
        <Text preset='p4' text={text}/>
      </div>
    );
  };
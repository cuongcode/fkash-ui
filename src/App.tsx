import { Text, Color } from './components/base/'
import { Typography } from './components/sections'
import { FC, ReactNode } from "react";

function App() {
  return (
    <div className='flex flex-col gap-20 p-10 font-inter'>
      <Section name='Typography'>
        <Typography />
      </Section>
      <Section name='Color'>
        <Color />
      </Section>
    </div>
  );
}

export default App;

interface SectionProps {
  name: string;
  children?: ReactNode;
}
const Section:FC<SectionProps> = (props) => {
  const {name, children} = props
  return (
    <div className='flex flex-col gap-5 divide-y divide-gray-300'>
      <Text text={name} preset='h4'/>
      {children}
  </div>
  );
};
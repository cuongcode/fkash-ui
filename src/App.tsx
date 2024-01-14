import { Text, Color} from './components/base/'
import { Typography, ButtonSection, BadgeSection } from './components/sections'
import { FC, ReactNode } from "react";

function App() {
  return (
    <div className='flex flex-col gap-20 p-10 font-inter bg-background-black text-white'>
      <Section name='Typography'>
        <Typography />
      </Section>
      <Section name='Color'>
        <Color />
      </Section>
      <Section name='Button'>
        <ButtonSection />
      </Section>
      <Section name='Badge'>
        <BadgeSection />
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
    <div className='flex flex-col gap-5'>
      <Text text={name} preset='h4'/>
      {children}
  </div>
  );
};


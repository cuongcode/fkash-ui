import { Text, Color} from './components/base/'
import { Typography, ButtonSection, BadgeSection, CheckboxSection } from './components/sections'
import { FC, ReactNode } from "react";

function App() {
  return (
    <div className='p-10 font-inter bg-background-black text-white'>
      <div className='flex flex-col gap-10 max-w-screen-md m-auto'>
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
        <Section name='Checkbox'>
          <CheckboxSection />
        </Section>
      </div>
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
    <div className='flex flex-col gap-5 border border-primary-100 border-dashed rounded-2xl p-5'>
      <Text text={name} preset='h5' className='border-b border-b-gray-600'/>
      {children}
  </div>
  );
};


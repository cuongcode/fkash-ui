import { Text, Color, Header, Footer} from './components/base/'
import { Typography, ButtonSection, BadgeSection, CheckboxSection, NotificationSection } from './components/sections'
import { FC, ReactNode } from "react";

function App() {
  return (
    <div className='flex flex-col gap-10 px-10 font-inter bg-background-black text-white'>
      <Header />
      <div className='flex flex-col gap-10 w-full max-w-screen-md m-auto'>
        <Section name='Button'>
          <ButtonSection />
        </Section>
        <Section name='Checkbox'>
          <CheckboxSection />
        </Section>
        <Section name='Badge'>
          <BadgeSection />
        </Section>
        <Section name='Notification'>
          <NotificationSection />
        </Section>
        <Section name='Color'>
          <Color />
        </Section>
        <Section name='Typography'>
          <Typography />
        </Section>
      </div>
      <Footer />
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
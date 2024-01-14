import { Text } from '../base/'

export const Typography = () => {
    return (
      <div className='flex flex-col gap-10'>
        <div>
          <Text text="Heading 1" preset="h1" />
          <Text text="Heading 2" preset="h2" />
          <Text text="Heading 3" preset="h3" />
          <Text text="Heading 4" preset="h4" />
          <Text text="Heading 5" preset="h5" />
          <Text text="Heading 6" preset="h6" />
        </div>
        <div>
          <Text text="Body Semibold" preset="p1b" />
          <Text text="Body Regular" preset="p1" />
          <Text text="Body Semibold" preset="p2b" />
          <Text text="Body Regular" preset="p2" />
          <Text text="Body Semibold" preset="p3b" />
          <Text text="Body Regular" preset="p3" />
          <Text text="Body Semibold" preset="p4b" />
          <Text text="Body Regular" preset="p4" />
          <Text text="Body Semibold" preset="p5b" />
          <Text text="Body Regular" preset="p5" />
          <Text text="Body Semibold" preset="p6b" />
          <Text text="Body Regular" preset="p6" />
        </div>
    </div>
    );
  };
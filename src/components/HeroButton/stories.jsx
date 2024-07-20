import { HeroButton } from '.';
import { InnerButton } from '../InnerButton';

export default {
  title: 'HeroButton',
  component: HeroButton,
  args: {
    children: 'Hire me',
    type: 'hireMe',
  },
  argTypes: {
    children: { control: 'text' },
    type: {
      control: { type: 'select', options: ['hireMe', 'downloadCV'] },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => {
  if (args.type === 'downloadCV') {
    return (
      <HeroButton {...args}>
        <InnerButton type="downloadCV">{args.children}</InnerButton>
      </HeroButton>
    );
  }
  return <HeroButton {...args} />;
};

export const HireMe = Template.bind({});
HireMe.args = {
  children: 'Hire me',
  type: 'hireMe',
};

export const DownloadCV = Template.bind({});
DownloadCV.args = {
  children: 'Download CV',
  type: 'downloadCV',
};

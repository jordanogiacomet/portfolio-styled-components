import { Link } from '.';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Link',
  component: Link,
  args: {
    href: '#',
    children: <CodeBracketIcon className="icon" />,
  },
  argTypes: {
    href: { control: 'text' },
    children: { control: 'none' }, // We will provide predefined children for the stories
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const CodeBracket = (args) => <Link {...args} />;
CodeBracket.args = {
  children: <CodeBracketIcon className="icon" />,
};

export const Eye = (args) => <Link {...args} />;
Eye.args = {
  children: <EyeIcon className="icon" />,
};

import React from 'react';
import { Form } from '.';
import { Label } from '../Label';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { EmailButton } from '../EmailButton';

export default {
  title: 'Form',
  component: Form,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Label htmlFor="email">Your email</Label>
      <Input
        name="email"
        type="email"
        id="email"
        required
        placeholder="user@example.com"
      />
      <Label htmlFor="subject">Your subject</Label>
      <Input
        name="subject"
        type="text"
        id="subject"
        required
        placeholder="Just saying hi"
      />
      <Label htmlFor="message">Your message</Label>
      <TextArea
        name="message"
        id="message"
        placeholder="Let's talk about..."
      />
      <EmailButton type="submit">Send Message</EmailButton>
    </>
  ),
};

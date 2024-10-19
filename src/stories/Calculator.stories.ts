import type { Meta, StoryObj } from '@storybook/react';
import Calculator from '../components/Calculator';

const meta = {
    title: "Example/Calculator",
    component: Calculator,
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    //   layout: 'fullscreen',
        layout: 'centered',
    },
    args: {},

} satisfies Meta<typeof Calculator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Calc1: Story = {
    args: {
      arg1: '123',
      arg2: '345'
    },
  };
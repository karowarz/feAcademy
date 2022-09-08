import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';
import ButtonData from './Button.data';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = ButtonData.Base;

export const Primary = Template.bind({});
Primary.args = ButtonData.Primary;

export const Large = Template.bind({});
Large.args = ButtonData.Large;

export const Small = Template.bind({});
Small.args = ButtonData.Small;

export const Disabled = Template.bind({});
Disabled.args = ButtonData.Disabled;

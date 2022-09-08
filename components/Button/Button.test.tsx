/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Story } from '@storybook/react';
import { axe } from 'jest-axe';
import { Button, ButtonProps } from './Button';
import * as stories from './Button.stories';


Object.entries(stories)
	.filter(([storyName]) => storyName.toLowerCase() !== 'default')
	.forEach(([storyName, componentStory]) => {
		const Component = componentStory as (Story<ButtonProps> & { args: ButtonProps });

		test(`renders ${storyName} without crashing`, async () => {
			const { container } = render(<Component {...Component.args}/>);

			//Snpashot testing
			expect(container).toMatchSnapshot();

			//axe a11y testing
			expect(await axe(container)).toHaveNoViolations();
		});
	});

test('Button contains correct text', () => {
	const label = 'no testowany jestem';
	const { container } = render(<Button label={label}/>);
	const text = screen.getByText(label);
	expect(text).toBeInTheDocument();

	//Snpashot testing
	expect(container).toMatchSnapshot();
});

test('Button primary contains correct text', () => {
	const label = 'no testowany jestem';
	const { container } = render(<Button label={label} primary/>);

	const text = screen.getByText(label);
	expect(text).toBeInTheDocument();

	//Snapshot testing
	expect(container).toMatchSnapshot();
});

test('Button disabled contains correct text', () => {
	const label = 'no testowany jestem';
	const { container } = render(<Button label={label} disabled/>);

	const text = screen.getByText(label);
	expect(text).toBeInTheDocument();

	//Snapshot testing
	expect(container).toMatchSnapshot();
});

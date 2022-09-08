/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { Story } from '@storybook/react';
import { axe } from 'jest-axe';
import { ButtonProps } from './Button';
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

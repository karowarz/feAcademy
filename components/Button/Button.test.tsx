/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {Button} from './Button';

test('Header contains correct text', () => {
	const label = 'no testowany jestem';
	render(<Button label={label}/>);

	const text = screen.getByText(label);
	expect(text).toBeInTheDocument();
});
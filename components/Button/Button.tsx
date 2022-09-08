import React, {ButtonHTMLAttributes} from 'react';
import styles from './Buttton.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean;
	/**
	 * What background color to use
	 */
	backgroundColor?: string;
	/**
	 * How large should the button be?
	 */
	size?: 'small' | 'medium' | 'large';
	/**
	 * Button contents
	 */
	label: string;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;

	disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({primary = false, size = 'medium', disabled, backgroundColor, label, ...props}: ButtonProps) => {
	const disabledClass = disabled ? styles['storybook-button--disabled'] : ''
	const mode = primary ? styles['storybook-button--primary'] : styles['storybook-button--secondary'];
	return (
		<button
			type="button"
			className={[styles['storybook-button'], styles[`storybook-button--${size}`], mode, disabledClass].join(' ')}
			style={{backgroundColor}}
			{...props}
		>
			{label}
		</button>
	);
};

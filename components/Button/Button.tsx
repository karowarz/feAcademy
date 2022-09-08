/* eslint-disable no-mixed-spaces-and-tabs */
import React, { ButtonHTMLAttributes } from 'react';
import styles from './Buttton.module.scss';
import classNamesBind from 'classnames/bind';

const cx = classNamesBind.bind(styles);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	// Optional className
	className?: string;
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
export const Button = ({
	                       className,
	                       primary = false,
	                       size = 'medium',
	                       disabled,
	                       backgroundColor,
	                       label,
	                       ...props
                       }: ButtonProps) => {
	const classNames = cx({
		'storybook-button': true,
		[`storybook-button--${size}`]: true,
		'storybook-button--primary': primary,
		'storybook-button--secondary': !primary,
		'storybook-button--disabled': disabled,
		[`${className}`]: !!className
	});

	return (
		<button
			type="button"
			className={classNames}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};

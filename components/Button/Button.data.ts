import { ButtonProps } from './Button';

const common: ButtonProps = {
	label: 'This is Button',
};

const ButtonData: { [key: string]: ButtonProps } = {
	Base: common,
	Primary: { ...common, primary: true },
	Large: { ...common, size: 'large' },
	Small: { ...common, size: 'small' },
	Disabled: { ...common, disabled: true },
};

export default ButtonData;
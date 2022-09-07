import {Button} from './Button/Button';

export const Teaser = ({title, children = 'Teaser'}: { title?: string; children: string }) => {
	return (
		<>
			{title}
			{children}
			<Button label={'elo'} size={'large'} backgroundColor={'red'}/>
		</>
	);
};
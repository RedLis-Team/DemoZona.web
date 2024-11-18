import './Audio.scss';

export function Audio({
	className,
	...otherProps
}) {
	return (
		<audio controls {...otherProps} className={'audio'}/>
	);
}
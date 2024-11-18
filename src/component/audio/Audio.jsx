import './Audio.scss';

export function Audio({
	className,
	...otherProps
}) {
	return (
		<audio controls {...otherProps} onChange={(e) => console.log(e.target.files)} className={'audio'}/>
	);
}
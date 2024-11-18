import clsx from "clsx";

import './Input.scss';

export function Input({ className, ...otherProps }) {

	return (
		<input className={clsx('input', className)} max={50} {...otherProps}/>
	);
}
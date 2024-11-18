import clsx from "clsx";
import { ThreeDots } from "react-loader-spinner";

import './Button.scss';


export function Button({
	className,
	text = '',
	rightContent = null,
	isLoading = false,
	...otherProps
}) {
	return (
		<button className={clsx('btn', className)} disabled={isLoading} {...otherProps}>
			{isLoading ? (
				<ThreeDots
					visible={true}
					height="20"
					width="40"
					color="#fff"
					radius="9"
					ariaLabel="three-dots-loading"
					wrapperStyle={{}}
					wrapperClass=""
				/>
			) : text}
		</button>
	);
}
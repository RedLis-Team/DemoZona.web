import clsx from "clsx";

import './ContentWithHeader.scss';


export function ContentWithHeader({
	text = '',
	contentClassName = '',
	styles = {},
	buttonHeader = () => {},
	className,
	children,
}) {
	return (
		<div className={clsx('content-with-header', className)} style={styles}>
			<div className="content-with-header__header">
				<div className="content-with-header__header_text">
					<span>{text}</span>
				</div>
				<div className="content-with-header__btn">
					{buttonHeader()}
				</div>
			</div>
			<div className={clsx('content-with-header__content', contentClassName)}>
				{children}
			</div>
		</div>
	);
}
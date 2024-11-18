import { ContentWithHeader } from "../content/wih-header/ContentWithHeader";

export function Image({ src, alt, className }) {
	return (
		<ContentWithHeader
			styles={{
				background: `url(${src})`,
				minHeight: `100%`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}
			text={'Изображение'}
		/>
	);
}
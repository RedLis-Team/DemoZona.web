import { ContentWithHeader } from "../../content/wih-header/ContentWithHeader";

import './EmptyImage.scss';
import { IoImageOutline } from "react-icons/io5";
import { MutatingDots } from "react-loader-spinner";
import clsx from "clsx";

export function EmptyImage({
	isLoading,
	className,
	loadingText = 'Генерация картинки',
	loadedText = 'Сгенерировать картинку',
}) {
	return (
		<ContentWithHeader text={"Изображение"} className={clsx('empty-image', className)}>
			<div className="empty-image__content">
				{isLoading ? (
					<MutatingDots
						visible={true}
						height="100"
						width="100"
						color="#02633d"
						secondaryColor="#02633d"
						radius="12.5"
						ariaLabel="mutating-dots-loading"
						wrapperStyle={{}}
						wrapperClass=""
					/>
				) : (
					<IoImageOutline/>
				)}

				{isLoading ? loadingText : loadedText}
			</div>
		</ContentWithHeader>
	);
}
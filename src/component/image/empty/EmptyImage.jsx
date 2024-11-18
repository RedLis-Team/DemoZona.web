import { ContentWithHeader } from "../../content/wih-header/ContentWithHeader";

import './EmptyImage.scss';
import { IoImageOutline } from "react-icons/io5";
import { MutatingDots } from "react-loader-spinner";

export function EmptyImage({ isLoading }) {
	return (
		<ContentWithHeader text={"Изображение"} contentClassName={'empty-image'}>
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

				{isLoading ? 'Генерация картинки' : 'Сгенерировать картинку'}
			</div>
		</ContentWithHeader>
	);
}
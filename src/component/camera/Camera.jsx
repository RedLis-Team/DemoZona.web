import { useEffect, useRef, useState } from "react";
import { EmptyImage } from "../image/empty/EmptyImage";

import './Camera.scss';
import clsx from "clsx";

export function Camera({ wsUrl = '', width = '80%', emptyImageClassName = '', imageClassName = '' }) {
	const wsRef = useRef(null);
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		const ws = new WebSocket(`${wsUrl}/ws`);

		ws.binaryType = "arraybuffer";

		ws.onopen = () => {
			console.log("WebSocket соединение установлено.");
		};

		ws.onmessage = ({ data }) => {
			const blob = new Blob([data], { type: 'image/jpeg' });
			setImageUrl(URL.createObjectURL(blob));
		};

		ws.onclose = () => {
			console.log('WebSocket соединение закрыто.');
		};

		ws.onerror = (error) => {
			console.error('Ошибка WebSocket:', error);
		};

		wsRef.current = ws;

		return () => {
			ws.close();
			wsRef.current = null;
		};
	}, []);

	return (
		<div className="camera" style={{ width: width }}>
			{imageUrl ?
				<img src={imageUrl} className={clsx('camera__img', imageClassName)} alt={''}/> :
				<EmptyImage
					isLoading={!imageUrl}
					className={clsx('camera__img', emptyImageClassName)}
					loadingText={'Запуск камеры'}
				/>
			}
		</div>
	);
}
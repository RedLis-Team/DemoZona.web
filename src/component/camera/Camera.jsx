import { useEffect, useRef, useState } from "react";
import { EmptyImage } from "../image/empty/EmptyImage";

import './Camera.scss';
import clsx from "clsx";

export function Camera({ wsUrl = '', width = '80%', emptyImageClassName = '', imageClassName = '' }) {
	const wsRef = useRef(null);
	const [text, setText] = useState('Запуск камеры');
	const [imageUrl, setImageUrl] = useState('');
	const [reset, setReset] = useState(0);

	useEffect(() => {
		const ws = new WebSocket(`${wsUrl}/ws`);

		console.log(1);

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

			ws.close();

			setTimeout(() => {
				setReset(prev => prev++);
			}, 1000);
		};

		wsRef.current = ws;

		return () => {
			ws.close();
			wsRef.current = null;
		};
	}, [reset]);

	return (
		<div className="camera" style={{ width: width }}>
			{imageUrl ?
				<img src={imageUrl} className={clsx('camera__img', imageClassName)} alt={''}/> :
				<EmptyImage
					isLoading={!imageUrl}
					className={clsx('camera__img', emptyImageClassName)}
					loadingText={text}
				/>
			}
		</div>
	);
}
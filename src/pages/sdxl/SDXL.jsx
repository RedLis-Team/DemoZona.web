import { useState } from "react";
import axios from "axios";

import { Input } from "../../component/form/input/Input.jsx";
import { Button } from "../../component/form/button/Button.jsx";
import { EmptyImage } from "../../component/image/empty/EmptyImage";
import { Image } from "../../component/image/Image";

import './SDXL.scss';


const sdxlUrl = 'http://10.0.123.194:8082';

const sdxlAxios = axios.create({
	baseURL: sdxlUrl,
});

export function SDXL() {
	const [imageLink, setImageLink] = useState('');
	const [text, setText] = useState('');
	const [isLoading, setIsLoading] = useState(false);


	const onSend = async () => {
		try {
			setIsLoading(true);
			await sdxlAxios.post(`/run?text=${text}`);
			setIsLoading(false);

			setImageLink(() => `${sdxlUrl}/answer`);
		} catch (e) {
			setIsLoading(false);
		}
	};

	return (
		<div className="sdxl">
			<div className="sdxl__result">
				{imageLink && !isLoading ? <Image src={imageLink}/> : <EmptyImage isLoading={isLoading}/>}
			</div>
			<div className="sdxl__input">
				<Input placeholder={'Текст для генерации картинки'} onChange={(e) => setText(e.target.value)}/>
				<Button text={'Сгенерировать'} disabled={!text || isLoading} onClick={onSend}/>
			</div>
		</div>
	);
}
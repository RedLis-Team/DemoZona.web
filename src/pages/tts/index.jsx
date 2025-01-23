import { Input } from "../../component/form/input/Input";
import { Button } from "../../component/form/button/Button";
import { Audio } from "../../component/audio/Audio";
import { ContentWithHeader } from "../../component/content/wih-header/ContentWithHeader";
import { MySelect } from "../../component/form/my-select/MySelect";
import { useState } from "react";
import axios from "axios";
import { localAxios } from "../../http";

import './TTS.scss';


const ttsUrl = 'http://10.0.123.194:8081';

const ttsAxios = axios.create({
	baseURL: ttsUrl,
});

export function TTS() {
	const [isLoading, setIsLoading] = useState(false);
	const [audioUrl, setAudioUrl] = useState('');
	const [text, setText] = useState('');

	const [answerUrl, setAnswerUrl] = useState('');

	const onSend = async () => {
		try {
			setIsLoading(true);

			setAnswerUrl('');

			const { data } = await localAxios.get(audioUrl, { responseType: 'blob' });

			const formData = new FormData();

			formData.append("file", data);

			await ttsAxios.post('/loadsound', formData);

			await ttsAxios.post(`/run?text=${text}`);

			setAnswerUrl(`${ttsUrl}/answer`);

		} catch (e) {} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="tts">
			<div className="tts__input">
				<Input placeholder="Введите текст" onChange={(e) => setText(e.target.value)} value={text}/>
				<MySelect onChange={e => setAudioUrl(e)}/>
				<Button text="Отправить" onClick={onSend} isLoading={isLoading} disabled={!text || isLoading}/>
			</div>
			<div className="tts__output">
				<ContentWithHeader text={'Результат'}>
					<Audio src={answerUrl}/>
				</ContentWithHeader>
			</div>
		</div>
	);
}
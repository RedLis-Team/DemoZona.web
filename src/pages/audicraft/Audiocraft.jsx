import { Input } from "../../component/form/input/Input.jsx";
import { Audio } from "../../component/audio/Audio.jsx";
import { Button } from "../../component/form/button/Button.jsx";
import { ContentWithHeader } from "../../component/content/wih-header/ContentWithHeader";

import './Audiocraft.scss';
import axios from "axios";
import {useState} from "react";

const audioCraftUrl = 'http://10.0.58.95:8070'

const audioCraftAxios = axios.create({
	baseURL: audioCraftUrl,
})

export function Audiocraft() {
	const [text, setText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [answerUrl, setAnswerUrl] = useState('');

	const onSend = async () => {
		try{
			setIsLoading(true)
			setAnswerUrl('')

			await audioCraftAxios.post(`/run?text=${text}`)

			setAnswerUrl(`${audioCraftUrl}/answer`)
		}catch (e){
			console.log(e)
		}finally {
			setIsLoading(false);
		}
	}


	return (
		<div className="audiocraft">
			<div className="audiocraft__input">
				<Input placeholder="Текст песни" onChange={(e) => setText(e.target.value)} />
				<Button text={'Сгенерировать'} disabled={isLoading || !text} isLoading={isLoading} onClick={onSend} />
			</div>
			<div className="audiocraft__result">
				<ContentWithHeader text={'Песня'}>
					<Audio src={answerUrl} />
				</ContentWithHeader>
			</div>
		</div>
	);
}
import { Audio } from "../../component/audio/Audio.jsx";

import './Seed.scss';
import { ContentWithHeader } from "../../component/content/wih-header/ContentWithHeader";
import { AudioRecorder } from "../../component/form/audio-recorder/AudioRecorder";
import { Button } from "../../component/form/button/Button";
import { MySelect } from "../../component/form/my-select/MySelect";
import { useState } from "react";
import axios from "axios";
import { localAxios } from "../../http";

const seedUrl = 'http://10.0.123.194:8080';

const seedAxios = axios.create({
	baseURL: seedUrl,
});

export function Seed() {
	const [form, setForm] = useState({
		source: '',
		targetUrl: '',
	});

	const [isLoading, setIsLoading] = useState(false);
	const [ansUrl, setAnsUrl] = useState("");

	const onSend = async () => {
		try {
			setIsLoading(true);
			setAnsUrl('');

			const { data } = await localAxios.get(form.targetUrl, { responseType: 'blob' });

			const targetFormData = new FormData();
			targetFormData.append("file", data);

			await seedAxios.post('/load_target', targetFormData);

			const sourceData = new FormData();
			sourceData.append('file', form.source);

			await seedAxios.post('/load_source', sourceData);

			await seedAxios.get('/run');

			setAnsUrl(`${seedUrl}/answer`);
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};


	return (
		<div className="seed">
			<div className="seed__input">
				<AudioRecorder onChange={(blob) => setForm(prev => ({ ...prev, source: blob }))}/>
				<MySelect onChange={(url) => setForm(prev => ({ ...prev, targetUrl: url }))}/>
				<Button text={'Сгенерировать'} onClick={onSend}
				        disabled={isLoading || !form.source} isLoading={isLoading}/>
			</div>
			<div className="seed__result">
				<ContentWithHeader text={'Результат'}>
					<Audio src={ansUrl}/>
				</ContentWithHeader>
			</div>
		</div>
	);
}
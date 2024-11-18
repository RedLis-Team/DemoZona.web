import { MySelect } from "../../component/form/my-select/MySelect";
import { imageOptions } from "../../const";
import { localAxios } from "../../http";
import axios from "axios";


import './DeepLiveCam.scss';
import { Camera } from "../../component/camera/Camera";

const deepLiveCamUrlWS = 'ws://10.0.58.95:8090';
const deepLiveCamUrlHttp = 'http://10.0.58.95:8090';

const deepLiveCamAxios = axios.create({
	baseURL: deepLiveCamUrlHttp,
});

export function DeepLiveCam() {
	const onChangeSend = async (url) => {
		try {
			const { data } = await localAxios.get(url, { responseType: 'blob' });

			const imageFormData = new FormData();
			imageFormData.append("file", data);

			await deepLiveCamAxios.post('/image', imageFormData);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="deep-live-cam">
			<MySelect
				type={'image'}
				className={'deep-live-cam__select'}
				contanerLabel={'Готовые лица'}
				selectOptions={imageOptions}
				onChange={onChangeSend}
			/>
			<Camera wsUrl={deepLiveCamUrlWS}/>
		</div>
	);
}
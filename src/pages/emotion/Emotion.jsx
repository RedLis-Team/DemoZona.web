import { Camera } from "../../component/camera/Camera";

import './Emotion.scss';

const emotionUrl = 'ws://10.0.58.95:8080';

export function Emotion() {

	return (
		<div className="emotion">
			<Camera wsUrl={emotionUrl} width="100%"/>
		</div>
	);
}
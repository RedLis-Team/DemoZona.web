import { Camera } from "../../component/camera/Camera";

import './Yolo.scss';

const emotionUrl = 'ws://10.0.123.194:8040';

export function Yolo() {

	return (
		<div className="emotion">
			<Camera wsUrl={emotionUrl} width="100%"/>
		</div>
	);
}
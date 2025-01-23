import { Camera } from "../../component/camera/Camera";

import './Pose.scss';

const emotionUrl = 'ws://10.0.123.194:8031';

export function Pose() {

	return (
		<div className="emotion">
			<Camera wsUrl={emotionUrl} width="100%"/>
		</div>
	);
}
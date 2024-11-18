import { Input } from "../../component/form/input/Input.jsx";
import { Audio } from "../../component/audio/Audio.jsx";
import { Button } from "../../component/form/button/Button.jsx";

import './Audiocraft.scss';
import { ContentWithHeader } from "../../component/content/wih-header/ContentWithHeader";

export function Audiocraft() {

	return (
		<div className="audiocraft">
			<div className="audiocraft__input">
				<Input placeholder="Текст песни"/>
				<Button text={'Сгенерировать'}/>
			</div>
			<div className="audiocraft__result">
				<ContentWithHeader text={'Песня'}>
					<Audio/>
				</ContentWithHeader>
			</div>
		</div>
	);
}
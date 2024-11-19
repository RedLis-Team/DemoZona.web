import { Link } from "react-router-dom";

import logoSrc from './assert/Logo.svg';
import './Aside.scss';


const ai = {
	'Видео': [
		{
			name: 'Deep-live-cam',
			url: '/deep-live-cam',
		},
		{
			name: 'Emotion',
			url: '/emotion',
		},
		{
			name: 'Yolo',
			url: '/yolo',
		},
	],
	'Аудио': [
		{
			name: 'audiocraft',
			url: '/audiocraft',
		},
		{
			name: 'tts',
			url: '/tts',
		},
		{
			name: 'seed',
			url: '/seed',
		},
		{
			name: 'sdxl',
			url: 'sdxl',
		},
	],
};

export function Aside() {
	const blockNames = Object.keys(ai);


	return (
		<aside className="aside">
			<img src={logoSrc} alt="logo" className="aside__logo"/>
			<h1 className="aside__title">Институт искусственного интеллекта</h1>
			<nav className="aside_nav">
				{blockNames.map((blockName) => (
					<div className="aside__block" key={blockName}>
						<div className="aside__block_title">
                            <span className="material-symbols-outlined">
                                arrow_drop_down
                            </span>
							<h2>{blockName}</h2>
						</div>
						<div className="aside__block_nav_buttons">
							{ai[blockName].map(({ name, url }) => (
								<Link key={url} to={url}>{name}</Link>
							))}
						</div>
					</div>
				))}
			</nav>
		</aside>
	);
}
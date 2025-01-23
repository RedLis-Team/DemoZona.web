import { Link, useLocation } from "react-router-dom";

import logoSrc from './assert/Logo.svg';
import './Aside.scss';
import clsx from "clsx";


const ai = {
	'Видео': [
		{
			name: 'Замена лиц',
			url: '/deep-live-cam',
		},
		{
			name: 'Определение эмоций',
			url: '/v1',
		},
		{
			name: 'Сегментация',
			url: '/v2',
		},
		{
			name: 'Определение поз',
			url: '/v3',
		},
	],
	'Аудио': [
		{
			name: 'Генерация музыки',
			url: '/v4',
		},
		{
			name: 'Озвучивание текста',
			url: '/v5',
		},
		{
			name: 'Замена голоса',
			url: '/v6',
		}],
	'Фото': [
		{
			name: 'Генерация изображений',
			url: '/v7',
		},
	],
};

export function Aside() {
	const { pathname } = useLocation();

	console.log(pathname);
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
						<div className={clsx("aside__block_nav_buttons")}>
							{ai[blockName].map(({ name, url }, index) => (
								<span className={clsx(pathname === url && 'active')}><Link key={url}
								                                                           to={url}>{name}</Link></span>
							))}
						</div>
					</div>
				))}
			</nav>
		</aside>
	);
}
import { Link, useLocation } from "react-router-dom";

import logoSrc from './assert/Logo.svg';
import './Aside.scss';
import clsx from "clsx";


const ai = {
	'Чат-бот': [
		{
			name: 'Мирэа-бот',
			url: '/v0',
		},
	],
	'Видео': [
		{
			name: 'Замена лиц',
			url: '/v1',
		},
		{
			name: 'Определение эмоций',
			url: '/v2',
		},
		{
			name: 'Сегментация',
			url: '/v3',
		},
		{
			name: 'Определение поз',
			url: '/v4',
		},
	],
	'Фото': [
		{
			name: 'Генерация изображений',
			url: '/v5',
		},
	],
};

export function Aside() {
	const { pathname } = useLocation();

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
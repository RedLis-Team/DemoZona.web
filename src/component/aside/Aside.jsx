import logoSrc from './assert/Logo.svg';

import './Aside.scss';

const ai = {
    'Чат-бот': [
        {
            name: 'Gigachat API',
            url: '#',
        },
    ],
    'Видео': [
        {
            name: 'Deep-live-cam',
            url: '#',
        },
        {
            name: 'LLava-NEXT',
            url: '#',
        },
        {
            name: 'Gpose',
            url: '#',
        },
        {
            name: 'YOLO11',
            url: '#',
        },
    ],
    'Аудио': [
        {
            name: 'WSR',
            url: '#',
        },
        {
            name: 'audiocraft',
            url: '#',
        },
        {
            name: 'xtts',
            url: '#',
        },
        {
            name: 'Seed-vc',
            url: '#',
        },
        {
            name: 'SDXL',
            url: '#',
        },
    ],
};

export function Aside({ setAi }) {
    const blockNames = Object.keys(ai);


    return (
        <aside className="aside">
            <img src={logoSrc} alt="logo" className="aside__logo"/>
            <h1 className="aside__title">Институт искусственного интеллекта</h1>
            <nav className="aside_nav">
                {blockNames.map((blockName) => (
                    <div className="aside__block">
                        <div className="aside__block_title">
                            <span className="material-symbols-outlined">
                                arrow_drop_down
                            </span>
                            <h2>{blockName}</h2>
                        </div>
                        <div className="aside__block_nav_buttons">
                            {ai[blockName].map(({ name, url }) => (
                                <button key={name} onClick={() => setAi({ name, url })}>{name}</button>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    );
}
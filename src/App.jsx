import { Aside } from './component/aside/Aside';
import { Demo } from './component/demo/Demo';

import './app.scss'
import { useState } from 'react';

export function App(){
    const [ai, setAi]  =  useState(null)

    return (
        <div className='app'>
            <Aside setAi={setAi}/>
            <Demo ai={ai}/>
        </div>

    )
}

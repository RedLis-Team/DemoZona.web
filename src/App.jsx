import { Header } from './component/header/Header';
import { Aside } from './component/aside/Aside';
import { Demo } from './component/demo/Demo';

export function App(){
    return (
        <div>
            <Header/>
            <div>
                <Aside/>
                <Demo/>
            </div>
        </div>

    )
}

import './Demo.scss';
import {Outlet} from "react-router-dom";

export function Demo() {
    return (
        <div className="demo">
            <Outlet/>
        </div>
    );
}
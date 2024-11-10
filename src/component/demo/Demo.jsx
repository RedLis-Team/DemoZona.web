import './Demo.scss';
import { Hello } from '../hello/Hello';

export function Demo({ ai }) {
    return (
        <div className="demo">
            {ai ? <iframe src={ai.url} className="demo__iframe"/> : <Hello/>}
        </div>
    );
}
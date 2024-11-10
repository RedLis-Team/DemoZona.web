import './Demo.scss';
import { Hello } from '../hello/Hello';

export function Demo({ ai }) {
    return (
        <div className="demo">
            {ai ? <iframe src={'https://www.w3schools.com'} className="demo__iframe"/> : <Hello/>}
        </div>
    );
}
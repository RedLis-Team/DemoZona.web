import { IoClose } from "react-icons/io5";

import './ContentHeaderDeleteBtn.scss';

export function ContentHeaderDeleteBtn(props) {
	return (
		<button className="delete-btn" {...props}>
			<IoClose/>
		</button>
	);
}
import { useRef, useState } from "react";
import { Audio } from "../../audio/Audio.jsx";

import './Upload.scss';
import { ContentHeaderDeleteBtn } from "../../content/delete-btn/ContentHeaderDeleteBtn";
import clsx from "clsx";


export function Upload({ className, info = '', emptyText = 'Загрузите файл', ...otherProps }) {
	const [file, setFile] = useState(null);
	const fileInputRef = useRef({});

	const onClick = () => {
		fileInputRef.current?.click();
	};

	const onChange = (e) => {
		const fileIn = e.target.files[0];

		setFile(fileIn);
	};

	const onDeleteFile = () => {
		setFile(null);
	};

	return (
		<div className={clsx('upload',className)}>
			<div className="upload__header">
				<div className="upload__header_info">
					{info || 'аудио'}
				</div>
				{file && (
					<ContentHeaderDeleteBtn onClick={onDeleteFile}/>
				)}
			</div>
			{
				file ?
					(
						<div className="upload__contain">
							<Audio
								className="upload__contain_audio"
								src={URL.createObjectURL(file)}
							/>
						</div>
					) :
					(
						<div
							onClick={onClick}
							className="upload__empty"
						>
							<p>{emptyText}</p>
							<input
								ref={fileInputRef}
								accept="audio/*"
								value={file}
								onChange={onChange}
								type="file"
								style={{ display: 'none' }}
							/>
						</div>
					)
			}
		</div>
	);
}
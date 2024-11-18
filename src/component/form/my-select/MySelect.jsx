import Select from "react-select";
import { ContentWithHeader } from "../../content/wih-header/ContentWithHeader";
import { useEffect, useState } from "react";

import pavelVolaUrl from '../../../assert/audio/PavelVolya.wav';
import baskovUrl from '../../../assert/audio/Baskov.wav';
import gorinUrl from '../../../assert/audio/Gorin.wav';
import bidenUrl from '../../../assert/audio/Baiden.wav';
import timatiUrl from '../../../assert/audio/Timati.wav';
import trampUrl from '../../../assert/audio/Trump.wav';

import './MySelect.scss';
import { Audio } from "../../audio/Audio";

const options = [
	{
		value: pavelVolaUrl, label: 'Павел Воля',
	},
	{
		value: baskovUrl, label: 'Басков',
	},
	{
		value: gorinUrl, label: 'Горин',
	},
	{
		value: bidenUrl, label: 'Байден',
	},
	{
		value: timatiUrl, label: 'Тимати',
	},
	{
		value: trampUrl, label: 'Трамп',
	},
];

export function MySelect({
	onChange: onChangeValue = (url) => {},
	type = 'audio',
	selectOptions = options,
	contanerLabel = 'Готовые голоса',
	className,
	...otherProps
}) {
	const [url, setUrl] = useState(selectOptions[0].value);

	useEffect(() => {
		onChangeValue(url);
	}, []);

	const onChange = (data) => {
		setUrl(data.value);
		onChangeValue(data.value);
	};

	return (
		<ContentWithHeader text={contanerLabel} className={className}>
			{type === 'audio' && (
				<Audio src={url} onChange={(e) => console.log(e.target)}/>
			)}
			{type === 'image' && (
				<img src={url} alt={''} className={'select__image'}/>
			)}
			<Select
				options={selectOptions}
				defaultValue={selectOptions[0]}
				onChange={onChange}
				className={'select'}
				{...otherProps}
			/>
		</ContentWithHeader>
	);
}
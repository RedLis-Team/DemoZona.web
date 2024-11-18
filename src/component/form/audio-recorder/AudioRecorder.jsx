import { LiveAudioVisualizer } from "react-audio-visualize";
import { useMemo, useRef, useState } from "react";
import { PiRecordFill } from "react-icons/pi";
import { IoStop } from "react-icons/io5";
import { FaPause, FaPlay } from "react-icons/fa";
import { ContentWithHeader } from "../../content/wih-header/ContentWithHeader";
import { ContentHeaderDeleteBtn } from "../../content/delete-btn/ContentHeaderDeleteBtn";

import './AudioRecorder.scss';
import { useWavesurfer } from "@wavesurfer/react";

export function AudioRecorder({ onChange = (blob) => {} }) {
	const [audioUrl, setAudioUrl] = useState('');
	const [isRecording, setIsRecording] = useState(false);
	const [isRecorded, setIsRecorded] = useState(false);

	const mediaRecorder = useRef(null);
	const audioChunks = useRef([]);

	const containerRef = useRef(null);


	const widthAudio = useMemo(() => {
		if (containerRef.current) {
			const width = containerRef.current.offsetWidth;
			const style = window.getComputedStyle(containerRef.current);

			const paddingLeft = parseFloat(style.paddingLeft);
			const paddingRight = parseFloat(style.paddingRight);

			return width - paddingLeft - paddingRight;
		}

		return 0;
	}, [containerRef.current]);


	const onStartAudio = async () => {
		try {
			const mediaStream = await navigator.mediaDevices.getUserMedia({
				audio: true,
			});

			mediaRecorder.current = new MediaRecorder(mediaStream);

			mediaRecorder.current.ondataavailable = (event) => {
				audioChunks.current.push(event.data);
			};

			mediaRecorder.current.onstop = () => {
				const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
				audioChunks.current = [];

				mediaStream.getTracks().forEach(track => {track.stop();});

				onChange(audioBlob);
				setAudioUrl(URL.createObjectURL(audioBlob));
				setIsRecorded(true);
			};

			mediaRecorder.current.start();

			setIsRecording(true);
		} catch (e) {
			console.log(e);
		}
	};

	const onStopAudio = async () => {
		if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
			mediaRecorder.current.stop();
			setIsRecording(false);
		}
	};

	const onDeleteAudio = async () => {
		setIsRecorded(false);
		audioChunks.current = [];
		onChange('');
	};


	const wavesurfaceRef = useRef(null);

	const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
		container: wavesurfaceRef,
		height: 100,
		width: widthAudio,
		waveColor: '#c4c4c4',
		progressColor: '#02633D',
		barGap: 3,
		barWidth: 4,
		barHeight: 2,
		url: audioUrl,
		cursorColor: "transparent",
	});

	const onPausePlay = () => {
		wavesurfer && wavesurfer.playPause();
	};

	const recordButton = () => {
		return !isRecording ? (
			<button
				onClick={onStartAudio}
				className="audio-recorder__btn audio-recorder__play_btn"
			>
				<PiRecordFill/>
			</button>
		) : (
			<button
				onClick={onStopAudio}
				className="audio-recorder__btn audio-recorder__stop_btn"
			>
				<IoStop/>
			</button>
		);
	};

	return (
		<ContentWithHeader
			text="Запись голоса"
			buttonHeader={() => (
				isRecorded && <ContentHeaderDeleteBtn onClick={onDeleteAudio}/>
			)}
		>
			<div className="audio-recorder">
				{isRecording && (
					<div className="audio-recorder__audio">
						<LiveAudioVisualizer
							mediaRecorder={mediaRecorder.current}
							gap={3}
							barWidth={3}
							width={widthAudio}
							smoothingTimeConstant={0.6}
						/>
					</div>
				)}
				{isRecorded && (
					<div className="audio-recorder__audio">
						<audio src={audioUrl}/>
						<div ref={wavesurfaceRef}/>
					</div>
				)}
				<div className="audio-recorder__controls" ref={containerRef}>
					{isRecorded ? (
						<button className="audio-recorder__btn play_puase" onClick={onPausePlay}>
							{isPlaying ? (
								<FaPause/>
							) : (
								<FaPlay/>
							)}
						</button>
					) : (
						recordButton()
					)}
				</div>
			</div>
		</ContentWithHeader>
	);
}
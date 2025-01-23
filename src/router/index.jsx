import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { TTS } from "../pages/tts";
import { Seed } from "../pages/seed";
import { SDXL } from "../pages/sdxl/SDXL.jsx";
import { Audiocraft } from "../pages/audicraft/Audiocraft.jsx";
import { Emotion } from "../pages/emotion/Emotion";
import { Yolo } from "../pages/yolo/Yolo";
import { Pose } from "../pages/pose/Pose";
import { DeepLiveCam } from "../pages/deep-live-cam/DeepLiveCam";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <h1>Стенд для тестирования нейронок</h1>,
			},
			{
				path: "v2",
				element: <Yolo/>,
			},
			{
				path: "v3",
				element: <Pose/>,
			},
			{
				path: "v1",
				element: <Emotion/>,
			},
			{
				path: "deep-live-cam",
				element: <DeepLiveCam/>,
			},
			{
				path: "v5",
				element: <TTS/>,
			},
			{
				path: "v7",
				element: <SDXL/>,
			},
			{
				path: "v6",
				element: <Seed/>,
			},
			{
				path: "v4",
				element: <Audiocraft/>,
			},
		],
	},
]);
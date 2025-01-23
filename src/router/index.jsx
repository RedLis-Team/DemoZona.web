import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { SDXL } from "../pages/sdxl/SDXL.jsx";
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
				path: "v1",
				element: <DeepLiveCam/>,
			},
			{
				path: "v2",
				element: <Emotion/>,
			},
			{
				path: "v3",
				element: <Yolo/>,
			},
			{
				path: "v4",
				element: <Pose/>,
			},
			{
				path: "v5",
				element: <SDXL/>,
			},
		],
	},
]);
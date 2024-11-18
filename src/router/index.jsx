import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { TTS } from "../pages/tts";
import { Seed } from "../pages/seed";
import { SDXL } from "../pages/sdxl/SDXL.jsx";
import { Audiocraft } from "../pages/audicraft/Audiocraft.jsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout/>,
		children: [
			{
				path: "gpose",
				element: "",
			},
			{
				path: "yolo",
				element: "",
			},
			{
				path: "emo",
				element: "",
			},
			{
				path: "deep-live",
				element: "",
			},
			{
				path: "tts",
				element: <TTS/>,
			},
			{
				path: "sdxl",
				element: <SDXL/>,
			},
			{
				path: "seed",
				element: <Seed/>,
			},
			{
				path: "audiocraft",
				element: <Audiocraft/>,
			},
		],
	},
]);
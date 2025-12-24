"use client";
import "app/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

function RootLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		sdk.actions.ready();
	}, []);
	return (
		<html lang="en">
			<head>
				<meta
					name="fc:miniapp"
					content='{
  "version":"next",
  "imageUrl":"https://your-app.com/embed-image",
  "button":{
      "title":"Play Now",
      "action":{
      "type":"launch_miniapp",
      "name":"Your App Name",
      "url":"https://your-app.com"
      }
  }
  }'
				/>
			</head>
			<body>
				<Providers>
					<section className="flex justify-center">
						<Header />
					</section>
					{children}
				</Providers>
			</body>
		</html>
	);
}

export default RootLayout;

import "app/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://eswap.pro';
  return {
    other: {
      'fc:miniapp': JSON.stringify({
        version: 'next',
        imageUrl: `${URL}/og.png`,
        button: {
          title: `Launch Eswap Margin`,
          action: {
            type: 'launch_miniapp',
            name: 'Eswap Margin',
            url: `${URL}`,
            splashImageUrl: `${URL}/splash.png`,
            splashBackgroundColor: '#000000',
          },
        },
      }),
    },
  };
}

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
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

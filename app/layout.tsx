import "app/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `https://ewap-margin.vercel.app/next.svg`;
  return {
    title: 'Eswap Margin',
    description: 'The Next Generation of Decentralized Trading.',
    other: {
      'fc:miniapp:name': 'Eswap Margin',
      'fc:miniapp:image': imageUrl,
      'fc:miniapp:image:aspect_ratio': '1.91:1',
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

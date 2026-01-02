import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import Arrow from "./Arrow";

export default function Footer() {
	return (
		<footer className="w-full max-h-max">
			<div className="fit-content pt-16 pb-8 flex flex-col gap-8">
				<div className="flex flex-row md:gap-8 gap-10 flex-wrap justify-between text-neutral-300">
					<div className="flex flex-row flex-wrap md:gap-16 gap-8">
						<div>
							<Link href="/" className="flex flex-row md:gap-2 gap-1 items-center">
								<Logo />
								<span className="font-bold text-xl">Eswap Margin</span>
							</Link>
						</div>
						<ul className="flex flex-col gap-4">
							<li>
								<Link href="/dashboard" className="flex flex-row gap-2 text-lg hover:underline" style={{ fontStretch: "expanded" }}>
									<Arrow />
									How to trade on Eswap margin
								</Link>
							</li>
							<li>
								<Link href="/earn" className="flex flex-row gap-2 text-lg hover:underline" style={{ fontStretch: "expanded" }}>
									<Arrow />
									Earn
								</Link>
							</li>
							<li>
								<Link href="/trade" className="flex flex-row gap-2 text-lg hover:underline" style={{ fontStretch: "expanded" }}>
									<Arrow />
									Trade
								</Link>
							</li>
						</ul>
					</div>
					<div className="md:w-auto md:block md:justify-normal w-full flex justify-center">
						<Button type="button" size="lg" style="ghost">Connect Wallet</Button>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center mt-8">
						<a href="https://itunes.apple.com/app/coinbase-wallet/id1278383455?ls=1&mt=8" target="_blank" rel="noopener noreferrer">
								<img src="/getCoinbaseWallet.png" alt="Get Coinbase Wallet" style={{ width: '200px', height: 'auto' }} />
						</a>
						<div className="flex space-x-4 mt-4">
								<a href="https://itunes.apple.com/app/coinbase-wallet/id1278383455?ls=1&mt=8" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Apple App Store</a>
								<a href="https://play.google.com/store/apps/details?id=org.toshi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google Play Store</a>
						</div>
				</div>
				<div className="flex flex-col justify-center gap-2 items-center text-neutral-400 text-xs">
					<p>
						<a href="https://chain.link/hackathon" target="_blank" className="hover:text-neutral-500 transition-all">
							
						</a>
					</p>
					<p>Made by Eswap Team <strong></strong>. All right reserved.</p>
				</div>
			</div>
		</footer>
	);
}
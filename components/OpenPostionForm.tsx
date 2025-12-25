"use client";

import React from "react";
import { useAccount, usePrepareContractWrite, useContractRead, useNetwork, useContractWrite } from "wagmi";
import marketAbiData from "../abi/market.abi.json";
import positionsAbiData from "../abi/positions.abi.json";

import ERC20AbiData from "@/abi/ERC20.abi.json";
import { useEffect, useState } from "react";
import { networkConfig } from "@/helper-config.js";
import Button from "./Button";
import Extern from "./Extern";

type addressT = `0x${string}`;
type NetworkConfigKey = keyof typeof networkConfig;

function OpenPostionForm() {
	const { isConnected, address } = useAccount();
	const { chain } = useNetwork();
	const detectedChainId = chain?.id;
	const activeChainId: NetworkConfigKey =
		detectedChainId !== undefined && Object.prototype.hasOwnProperty.call(networkConfig, detectedChainId)
			? (detectedChainId as NetworkConfigKey)
			: 137;

	let marketAddress = networkConfig[activeChainId]["addressMarket"] as addressT;
	let positionsAddress = networkConfig[activeChainId]["addressPositions"] as addressT;
	const fee = 3000;

	const [addSend, setAddSend] = useState("");
	const [addTokenToTrade, setAddTokenToTrade] = useState("");
	const [isShort, setIsShort] = useState<boolean>(false);
	const [amount, setAmount] = useState(0);
	const [leverage, setleverage] = useState(1);
	const [limitPrice, setLimitPrice] = useState(0);
	const [stopPrice, setStopPrice] = useState(0);

	const [decTokenSend, setDecTokenSend] = useState(0);
	const [decTokenTrade, setDecTokenTrade] = useState(0);

	const [nameTokenSend, setNameTokenSend] = useState("");
	const [nameTokenTrade, setNameTokenTrade] = useState("");

	const [selectedValue, setSelectedValue] = useState("swap");

	const { config: approveConf } = usePrepareContractWrite({
		address: addSend as addressT,
		abi: ERC20AbiData.ERC20ABI,
		functionName: "approve",
		args: [positionsAddress, amount],
	});
	//! TODO: change to market contract
	// let { config: openPosConf } = usePrepareContractWrite({
	// 	address: positionsAddress, // This will now use the dynamic positionsAddress
	// 	abi: positionsAbiData.positionsABI,
	// 	functionName: "openPosition",
	// 	args: [address, addSend, addTokenToTrade, fee, isShort, leverage, amount, limitPrice, stopPrice],
	// });

	let { config: openPosConf } = usePrepareContractWrite({
		address: marketAddress,
		abi: marketAbiData.marketABI,
		functionName: "openPosition",
		args: [addSend, addTokenToTrade, fee, isShort, leverage, amount, limitPrice, stopPrice],
	});

	// const { config: pauseConf } = usePrepareContractWrite({
	// 	address: networkConfig[activeChainId]["addressMarket"] as addressT, // Updated here as well
	// 	abi: marketAbiData.marketABI,
	// 	functionName: "pause",
	// });
	const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setSelectedValue(e.target.value);
		setIsShort(e.target.value === "short");
	};
	const {
		write: openPosition,
		isSuccess: isSuccessOpenPosition,
		isLoading: isLoadingOpenPosition,
	} = useContractWrite(openPosConf);

	const { write: approve, isSuccess: isSuccessApprove, isLoading: isLoadingApprove } = useContractWrite(approveConf);

	const { data: decTokenSendTemp } = useContractRead({
		address: addSend as addressT,
		abi: ERC20AbiData.ERC20ABI,
		functionName: "decimals",
		args: [],
	});
	const { data: decTokenTradeTemp } = useContractRead({
		address: addTokenToTrade as addressT,
		abi: ERC20AbiData.ERC20ABI,
		functionName: "decimals",
		args: [],
	});

	const { data: nameTokenSendTemp } = useContractRead({
		address: addSend as addressT,
		abi: ERC20AbiData.ERC20ABI,
		functionName: "symbol",
		args: [],
	});
	const { data: nameTokenTradeTemp } = useContractRead({
		address: addTokenToTrade as addressT,
		abi: ERC20AbiData.ERC20ABI,
		functionName: "symbol",
		args: [],
	});

	const handleSliderChange = (e: any) => {
		setleverage(Number(e.target.value));
	};

	useEffect(() => {
		setDecTokenSend(decTokenSendTemp as number);
		setDecTokenTrade(decTokenTradeTemp as number);

		setNameTokenSend(nameTokenSendTemp as string);
		setNameTokenTrade(nameTokenTradeTemp as string);

		console.log("address : ", address);
		console.log("addSend : ", addSend);
		console.log("addTokenToTrade : ", addTokenToTrade);
		console.log("fee : ", fee);
		console.log("isShort : ", isShort);
		console.log("leverage : ", leverage);
		console.log("amount : ", amount);
		console.log("limitPrice : ", limitPrice);
		console.log("stopPrice : ", stopPrice);
	}, [
		decTokenSendTemp,
		decTokenTradeTemp,
		nameTokenSendTemp,
		nameTokenTradeTemp,
		amount,
		addSend,
		addTokenToTrade,
		address,
		isShort,
		leverage,
		limitPrice,
		stopPrice,
	]);

	return (
		<div className="flex flex-col gap-6" style={{ height: "calc(100% - 6rem)" }}>
			<nav className="glass-container-darker w-fit px-6 py-2" style={{ borderRadius: "2.5rem" }}>
				<ul
					className="open-position-switch flex flex-row items-center justify-center gap-2 md:text-xl text-sm"
					style={{ fontStretch: "expanded" }}
				>
					<li>
						<input
							type="radio"
							id="long"
							name="position"
							value="long"
							checked={selectedValue === "long"}
							onChange={handleChange}
							disabled
						/>
						<label htmlFor="long">Long</label>
					</li>
					<li>
						<input type="radio" id="short" name="position" value="short" onChange={handleChange} disabled />
						<label htmlFor="short">Short</label>
					</li>
					<li>
						<input
							type="radio"
							id="swap"
							name="position"
							value="swap"
							onChange={handleChange}
							checked={selectedValue === "swap"}
						/>
						<label htmlFor="swap">Swap</label>
					</li>
				</ul>
			</nav>
			<div className="flex flex-col gap-2">
				<article className="glass-container flex flex-col gap-6 rounded-3xl md:p-6 p-4">
					<p className="text-center text-neutral-300">
						Long and Short positions are not yet available. Please use the Swap feature for now.
					</p>
				</article>
			</div>
			{selectedValue === "swap" && (
				<article className="glass-container flex flex-col gap-6 rounded-3xl md:p-8 p-4">
					<div className="flex justify-center">
						<Button type="a" style="ghost" size="md" to="https://eswap.dexkit.app/">
							<span>Go to Eswap</span>
							<Extern />
						</Button>
					</div>
				</article>
			)}
		</div>
	);
}

export default OpenPostionForm;

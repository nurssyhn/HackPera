"use client";
import { useState } from "react";

const steps = [
	{
		label: "Asset in Escrow",
		description: "The asset has been transferred to the escrow account.",
	},
	{
		label: "Recipient Approved",
		description: "The recipient has approved the transaction.",
	},
	{
		label: "Transaction Completed",
		description: "The transfer has been successfully completed.",
	},
];

export default function ProcessPage() {
	// 1. adım her zaman onaylı başlar
	const [step, setStep] = useState(2);
	const [emailCode, setEmailCode] = useState("");
	const [telegramCode, setTelegramCode] = useState("");
	const [error, setError] = useState("");

	// Artık herhangi bir telegram kodunu kabul ediyoruz
	const handleVerify = (e: React.FormEvent) => {
		e.preventDefault();
		if (telegramCode.trim().length > 0) {
			setError("");
			setStep(3);
			setTimeout(() => setStep(4), 1000); // 3. aşamaya otomatik geçiş (demo)
		} else {
			setError("Please enter the code sent to your Telegram.");
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4">
			{/* Add margin-top to push card away from navbar */}
			<div className="max-w-lg w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 mt-20">
				<h1 className="text-xl sm:text-2xl font-extrabold mb-8 text-center">
					Transaction Status
				</h1>
				<ol className="relative border-l border-white/20 ml-4">
					{/* 1. Adım: Her zaman onaylı */}
					<li className="mb-10 ml-6">
						<span className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white border-2 border-green-400 text-base">
							1
						</span>
						<h3 className="font-bold text-base sm:text-lg mb-1 text-green-300">
							{steps[0].label}
						</h3>
						<p className="text-xs sm:text-sm text-green-200">
							{steps[0].description}
						</p>
						<div className="mt-2">
							<span className="inline-block px-3 py-1 rounded bg-green-600/80 text-xs font-semibold">
								Completed
							</span>
						</div>
					</li>
					{/* 2. Adım: Kod girişi veya onay */}
					<li className="mb-10 ml-6">
						<span
							className={`absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full border-2 text-base ${
								step >= 3
									? "bg-green-600 text-white border-green-400"
									: "bg-slate-800 text-gray-400 border-white/20"
							}`}
						>
							2
						</span>
						<h3
							className={`font-bold text-base sm:text-lg mb-1 ${
								step >= 3 ? "text-green-300" : "text-white"
							}`}
						>
							{steps[1].label}
						</h3>
						<p
							className={`text-xs sm:text-sm ${
								step >= 3 ? "text-green-200" : "text-gray-200"
							}`}
						>
							{steps[1].description}
						</p>
						{step === 2 && (
							<form onSubmit={handleVerify} className="mt-4 space-y-3">
								
								<div>
									<label className="block text-xs sm:text-sm mb-1">
										Telegram Code
									</label>
									<input
										type="text"
										className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white text-sm"
										value={telegramCode}
										onChange={(e) => setTelegramCode(e.target.value)}
										placeholder="Enter code sent to your Telegram"
										required
									/>
								</div>
								{error && (
									<div className="text-red-400 text-xs sm:text-sm">
										{error}
									</div>
								)}
								<button
									type="submit"
									className="w-full mt-2 py-2 rounded bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold hover:from-green-700 hover:to-green-500 transition text-sm"
								>
									Confirm
								</button>
							</form>
						)}
						{step === 3 && (
							<div className="mt-2">
								<span className="inline-block px-3 py-1 rounded bg-green-600/80 text-xs font-semibold">
									Approved! Completing transaction...
								</span>
							</div>
						)}
					</li>
					{/* 3. Adım: Transaction Completed */}
					<li className="mb-10 ml-6">
						<span
							className={`absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full border-2 text-base ${
								step === 4
									? "bg-green-600 text-white border-green-400"
									: "bg-slate-800 text-gray-400 border-white/20"
							}`}
						>
							3
						</span>
						<h3
							className={`font-bold text-base sm:text-lg mb-1 ${
								step === 4 ? "text-green-300" : "text-white"
							}`}
						>
							{steps[2].label}
						</h3>
						<p
							className={`text-xs sm:text-sm ${
								step === 4 ? "text-green-200" : "text-gray-200"
							}`}
						>
							{steps[2].description}
						</p>
						{step === 4 && (
							<div className="mt-2">
								<span className="inline-block px-3 py-1 rounded bg-green-600/80 text-xs font-semibold">
									Transaction Complete
								</span>
							</div>
						)}
					</li>
				</ol>
			</div>
		</div>
	);
}
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

type PayProps = {
  contact: {
    name: string;
    email: string;
    description: string;
    amount: string;
    telegram: string;
  };
  onClose: () => void;
};

const ASSETS = [
  { label: "XLM", value: "XLM" },
  { label: "USDC", value: "USDC" },
  { label: "EUROC", value: "EUROC" },
];

export default function Pay({ contact, onClose }: PayProps) {
  const [asset, setAsset] = useState("XLM");
  const [amount, setAmount] = useState(contact.amount.replace(/[^0-9.]/g, "") || "");
  const [sending, setSending] = useState(false);
  const router = useRouter();

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      // alert(`Asset transferred to escrow! (${amount} ${asset})`);
      onClose();
      router.push("/process"); // step=1: asset escrow'da
    }, 1200);
  };

  return (
    <form
      onSubmit={handleSend}
      className="flex flex-col items-center w-full max-w-sm mx-auto"
      autoComplete="off"
    >
      <h2 className="text-2xl font-bold mb-2 text-center">Send Payment</h2>
      <div className="w-full mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-200">Recipient Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded bg-blue-900/30 border border-blue-900/40 text-white"
          value={contact.name}
          disabled
        />
      </div>
      <div className="w-full mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-200">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded bg-blue-900/30 border border-purple-900/40 text-white"
          value={contact.email}
          disabled
        />
      </div>
      <div className="w-full mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-200">Telegram ID</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded bg-blue-900/30 border border-slate-900/40 text-white"
          value={contact.telegram}
          disabled
        />
      </div>
      <div className="w-full mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-200">Asset</label>
        <div className="flex gap-3">
          {ASSETS.map(a => (
            <button
              key={a.value}
              type="button"
              className={`flex-1 py-2 rounded-lg border text-sm font-semibold transition-all
                ${asset === a.value
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500 shadow-lg"
                  : "bg-white/10 text-gray-200 border-white/20 hover:bg-white/20"
                }`}
              onClick={() => setAsset(a.value)}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full mb-6">
        <label className="block mb-1 text-sm font-medium text-gray-200">Amount</label>
        <input
          type="number"
          min="0"
          step="any"
          className="w-full px-3 py-2 rounded bg-white/10 border border-white/20 text-white appearance-none"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
          style={{
            MozAppearance: "textfield",
          }}
          onWheel={e => (e.target as HTMLInputElement).blur()}
        />
      </div>
      <button
        type="submit"
        disabled={sending || !amount}
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-200
          ${sending
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
          }`}
      >
        {sending ? "Sending..." : `Send ${asset}`}
      </button>
      <style jsx global>{`
        /* Hide number input spinners for all browsers */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </form>
  );
}
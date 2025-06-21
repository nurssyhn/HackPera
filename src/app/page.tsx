"use client";
import React from 'react';
import { Users, RefreshCw, Shield, Star, ArrowRight, Lock, Link2, KeyRound, Wallet, MailCheck } from 'lucide-react';
import safePayLogo from '../app/assets/safe_pay.png';
import stellarLogo from '../app/assets/stellar.png';

const SafePayLanding = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex flex-col flex-1">
          <div className="text-center pt-20 pb-16">
            {/* Stellar Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <img src={stellarLogo.src} alt="Stellar Logo" className="w-5 h-5" />
              <span className="text-blue-400 font-medium">Stellar Network</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Safe Pay
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
             The easiest way to send Web3 funds — no wallet info needed from the receiver.
            </p>

            {/* Main Feature Card */}
            <div className="max-w-5xl mx-auto mb-20">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {/* Feature 1 */}
                  <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      Secure Transfer
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Send XLM or USDC to multiple recipients in one secure transaction.
                    </p>
                  </div>

                  {/* Feature 2 - Email & Telegram Verification */}
                  <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/30 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MailCheck className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                      Email & Telegram Verification
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Verify recipient identity with email and Telegram PIN for extra security.
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/30 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors">
                      Escrow Protection
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Funds are held securely in escrow until the recipient verifies and confirms the payment.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>Start Safe Pay</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="group w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5s</div>
                <div className="text-gray-400">Avg Transfer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">%0.3</div>
                <div className="text-gray-400">Transaction Fee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Extra Section: How it works */}
          <section className="max-w-5xl mx-auto mb-24">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              How Safe Pay Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <Lock className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Deposit the Amount to be Paid</h3>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <Link2 className="w-8 h-8 text-blue-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Create Link And Share</h3>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <KeyRound className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Open the Link and Confirm PIN Code</h3>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <Wallet className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Receive Payment to Your Wallet</h3>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-950/80 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg text-white">Safe Pay</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
            <a href="https://stellar.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Stellar Network</a>
            <span className="hidden md:inline">|</span>
            <a href="/about" className="hover:text-blue-400 transition">About</a>
            <span className="hidden md:inline">|</span>
            <a href="/security" className="hover:text-blue-400 transition">Security</a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:support@safepay.com" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <div className="text-gray-500 text-xs text-center md:text-right">
            &copy; {new Date().getFullYear()} Safe Pay. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default SafePayLanding;
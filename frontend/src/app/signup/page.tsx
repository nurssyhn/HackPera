'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import stellarLogo from '../assets/stellar.png'

export default function SignupPage() {
  const router = useRouter()

  const handlePasskeyLogin = async () => {
    try {
      const challenge = Uint8Array.from('demo-challenge', c => c.charCodeAt(0))

      await navigator.credentials.get({
        publicKey: {
          challenge: challenge.buffer,
          timeout: 60000,
          userVerification: 'preferred',
          allowCredentials: [
            {
              type: 'public-key',
              id: Uint8Array.from('demo-credential-id', c => c.charCodeAt(0)).buffer,
              transports: ['internal'],
            },
          ],
        },
      })

      // Her durumda yönlendir
      router.push('/safepay')
    } catch (err) {
      // Hata olsa bile yönlendir
      router.push('/safepay')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden flex items-center justify-center">
      <main className="relative z-10 w-full max-w-md mx-auto p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
          Sign Up / Sign In
        </h1>
        
        <button
          onClick={handlePasskeyLogin}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          <img src={stellarLogo.src} alt="Stellar Logo" className="w-6 h-6" />
          Sign in with Passkey
        </button>
      </main>

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
  )
}
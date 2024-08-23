"use client";

import Footer from "src/components/Footer";
import TransactionWrapper from "src/components/TransactionWrapper";
import WalletWrapper from "src/components/WalletWrapper";
import { GITHUB_LINK } from "src/links";
import { useAccount } from "wagmi";
import LoginButton from "../components/LoginButton";
import SignupButton from "../components/SignupButton";
import Image from "next/image";

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <nav className="flex justify-between items-center p-6 bg-[#161b22]">
        <div className="flex items-center gap-4">
          <SignupButton />
          {!address && <LoginButton />}
        </div>
      </nav>

      <section className="hero flex flex-col items-center justify-center text-center py-16 bg-[#0d1117]">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="BaseMemeRise Logo"
            width={150}
            height={150}
          />
          <h1 className="text-5xl font-bold text-indigo-600 mt-4">
            Welcome to BaseMemeRise
          </h1>
          <p className="text-lg max-w-2xl mt-4 mb-6">
            Your gateway to the moon on Coinbase's Base L2!
          </p>
        </div>
        <button className="bg-indigo-600 text-white rounded-lg px-6 py-3 text-lg">
          Get Started
        </button>
      </section>

      <section className="launchpad-info py-16 bg-[#161b22] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">Launch Your MemeCoin</h2>
          <p className="mb-6">
            BaseMemeRise is the premier launchpad for meme coins on Coinbase's
            Base L2. Join the next big wave!
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white rounded-lg px-6 py-3 text-lg inline-block"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="wallet-connect py-16 bg-[#1e2731] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">Connect Your Wallet</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white rounded-lg px-6 py-3">
              Connect with MetaMask
            </button>
            <button className="bg-blue-600 text-white rounded-lg px-6 py-3">
              Connect with Coinbase Wallet
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

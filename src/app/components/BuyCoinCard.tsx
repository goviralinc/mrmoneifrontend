"use client"; // This makes the component interactive

import React from "react";
import Image from "next/image";

import logo from "../../public/logo.png";
import debitIcon from "../../public/icons/debit.png";
import bitcoinIcon from "../../public/icons/bitcoin.png";
import bankIcon from "../../public/icons/bank.svg";
import cardIcon from "../../public/icons/card.svg";

import Ellipse from "../../public/icons/Ellipse.png";

const BuyCoinCard: React.FC = () => {
  return (
    <div className="bg-white shadow-custom-glow rounded-25xl p-6 w-full font-monsterrat relative mb-8">
      {/* Transaction Methods */}
      <div className="flex justify-around mb-6 mt-8">
        <div className="flex flex-col items-center">
          <div className="bg-primary-colors text-white p-5 rounded-full flex items-center justify-center">
            <Image src={debitIcon} alt="Debit Card" width={35} height={35} />
          </div>
          <p className="text-xsm font-small text-center">Debit Card</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border-2 border-primary-colors border-solid text-primary-colors p-5 rounded-full flex items-center justify-center">
            <Image src={bitcoinIcon} alt="Crypto-Currency" width={35} height={35} />
          </div>
          <p className="text-xsm font-small text-center">Crypto-Currency</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border-2 border-primary-colors border-solid text-primary-colors p-5 rounded-full flex items-center justify-center">
            <Image src={bankIcon} alt="Bank Transfer" width={35} height={35} />
          </div>
          <p className="text-xsm font-small text-center">Bank Transfer</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border-2 border-primary-colors border-solid text-primary-colors p-5 rounded-full flex items-center justify-center">
            <Image src={cardIcon} alt="Card" width={35} height={35} />
          </div>
          <p className="text-xsm font-small text-center m-auto">Ussd</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="mb-8">
        <label className="block text-xl font-bold mb-2" htmlFor="buy">
          You buy
        </label>
        <div className="flex items-center border-2 border-primary-colors border-solid rounded-lg px-4 py-2">
          <input
            id="buy"
            type="text"
            placeholder="0.00"
            className="flex-1 focus:outline-none text-primary-colors text-xl p-5"
          />
          <select className="text-black font-bold focus:outline-none text-xl bg-none border-none">
            <option value="NGN">NGN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xl font-bold mb-2" htmlFor="receive">
          You receive
        </label>
        <div className="flex items-center border-2 border-primary-colors border-solid rounded-lg px-4 py-2">
          <input
            id="receive"
            type="text"
            placeholder="0.00"
            className="flex-1 focus:outline-none text-primary-colors text-xl p-5"
          />
          <div className="w-8 h-8">
            <Image src={logo} alt="Mr. Monei" width={32} height={32} />
          </div>
        </div>
      </div>

      {/* Transaction Fee */}
      <div className="flex justify-between text-sm font-small mb-4">
        <p>Transaction Fee</p>
        <p>1%</p>
      </div>

      {/* Balance Reflection */}
      <p className="text-center text-sm font-[600] mt-8 mb-32">
        Your Balances Will Reflect With Immediate Effect
      </p>

      {/* Buy Coin Button */}
      {/* Buy Coin Button */}
      <button
        className="w-full h-[150px] text-17xl font-bold text-whitesmoke absolute bg-cover bg-center left-0 bottom-0 bg-transparent flex flex-col justify-end items-center font-montserrat"
        style={{
          backgroundImage: `url(${Ellipse.src})`,
          backgroundSize: "100% auto", // Full width, proportional height
          backgroundPosition: "center bottom", // Center horizontally and bottom vertically
          backgroundRepeat: "no-repeat", // Prevent tiling
          borderRadius: "0 0 40px 40px", // Bottom rounded corners
          paddingBottom: "40px", // Adjust distance from the bottom
        }}
      >
        Buy Coin
      </button>

    </div>
  );
};

export default BuyCoinCard;

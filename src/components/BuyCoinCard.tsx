"use client";

import React, { useState, useEffect } from "react";
import {
  faCreditCard,
  faUniversity,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

import logo from "../../public/logo.png";
import Ellipse from "../../public/icons/Ellipse.png";
import TransactionMethod from "./ui/TransactionMethod";

import CheckoutModal from "./ui/CheckoutModal";

import { fetchConversionRates } from "@/services/conversion";

const BuyCoinCard: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("Debit Card");
  const [buyAmount, setBuyAmount] = useState<string>("");
  const [currentInput, setCurrentInput] = useState<string>("");
  const [receiveAmount, setReceiveAmount] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("NGN");
  const [conversionRates, setConversionRates] = useState<{ [key: string]: number }>({
    NGN: 1,
    USDT: 1 / 0.015,
    BNB: 1 / 0.017,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");

  // Fetch conversion rates from API
  const fetchConversion = async () => {
    try {
      setIsLoading(true);
      const rates = await fetchConversionRates(selectedCurrency);  // Call the service
      console.log(rates);
      setConversionRates(rates);
    } catch (error) {
      console.error("Error fetching conversion rates:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Reset the form when currency is changed
    setBuyAmount("")
    setReceiveAmount("")
    setCurrentInput("");
    fetchConversion();  // Fetch new conversion rates
  }, [selectedCurrency]);  // Trigger when currency changes


  // Handle conversion logic (buyAmount to receiveAmount)
  useEffect(() => {
    if (currentInput === "buy") {
      if (isLoading || !buyAmount || isNaN(Number(buyAmount))) return; // Do not update if loading or invalid input
      const conversionRate = conversionRates[selectedCurrency] || 0;
      
      // Perform conversion and check for Infinity
      const convertedValue = (parseFloat(buyAmount) * conversionRate);
      console.log(convertedValue)
      if (!isFinite(convertedValue)) {
        // Do nothing if result is Infinity
        setReceiveAmount("");
        return;
      }
      console.log(convertedValue);  // If needed, log the converted value for debugging
      setReceiveAmount(convertedValue.toFixed(4));
    } else if (currentInput === "sell") {
      if (isLoading || !receiveAmount || isNaN(Number(receiveAmount))) return; // Do not update if loading or invalid input
      const conversionRate = conversionRates[selectedCurrency] || 0;
      
      // Perform conversion and check for Infinity
      const convertedValue = (parseFloat(receiveAmount) / conversionRate);
      if (!isFinite(convertedValue)) {
        // Do nothing if result is Infinity
        setBuyAmount("");
        return;
      }
      console.log(convertedValue);  // If needed, log the converted value for debugging
      setBuyAmount(convertedValue.toFixed(4));
    }
  }, [receiveAmount, buyAmount, currentInput, selectedCurrency, conversionRates, isLoading]);
  
  const transactionMethods = [
    { icon: faCreditCard, label: "Debit Card", customClass: "custom-class-1" },
    {
      icon: faEthereum,
      label: "Crypto-Currency",
      customClass: "border-none bg-transparent",
    },
    { icon: faUniversity, label: "Bank Transfer", customClass: "" },
    { icon: faPhone, label: "Ussd", customClass: "custom-class-3" },
  ];

  const handleBuyCoin = () => {
    //alert(
    //  `You selected ${selectedMethod} with ${selectedCurrency}, buying ${buyAmount} and will receive ${receiveAmount} Monei tokens.`
    //);

    setIsModalOpen(true);
  };

  const handleCheckoutConfirm = () => {
    alert(`Payment Confirmed:
    Email: ${email}
    Wallet Address: ${walletAddress}
    Payment Method: ${selectedMethod}
    Paying: ${buyAmount} ${selectedCurrency}
    Receiving: ${receiveAmount} Monei Tokens.`);
    setIsModalOpen(false); // Close the modal after confirmation
  };

  const paymentMethodType =
    selectedMethod === "Debit Card" ||
    selectedMethod === "Bank Transfer" ||
    selectedMethod === "Ussd"
      ? "Naira"
      : "Crypto";


  return (
    <div className="bg-white shadow-custom-glow rounded-25xl p-6 w-full font-montserrat relative mb-8">
      {/* Transaction Methods */}
      <div className="flex justify-around mb-6 mt-8">
        {transactionMethods.map((method) => (
          <TransactionMethod
            key={method.label}
            icon={method.icon}
            label={method.label}
            isSelected={selectedMethod === method.label}
            onClick={() => setSelectedMethod(method.label)}
            className={method.customClass}
          />
        ))}
      </div>

      {/* Form Fields */}
      <div className="mb-8">
        <label className="block text-xl font-bold mb-2" htmlFor="buy">
          Buy with
        </label>
        <div className="flex items-center border-2 border-primary-colors border-solid rounded-lg px-4 py-2">
          <input
            id="buy"
            type="text"
            placeholder="0"
            value={buyAmount}
            onChange={(e) => {
              setCurrentInput("buy");
              const value = e.target.value;
              if (/^\d*\.?\d*$/.test(value)) {
                // Only accept digits for whole numbers
                setBuyAmount(value);
              }
            }}
            className="flex-1 focus:outline-none text-black text-xl p-5"
            disabled={isLoading} // Disable input when loading conversion rates
          />
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="text-black font-bold focus:outline-none text-xl bg-none border-none"
            disabled={isLoading} // Disable currency selection while loading
          >
            <option value="NGN">NGN</option>
            <option value="USDT">USDT</option>
            <option value="BNB">BNB</option>
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
            placeholder="0"
            onChange={(e) => {
              setCurrentInput("sell");
              const value = e.target.value;
              if (/^\d*\.?\d*$/.test(value)) {
                // Only accept digits for whole numbers
                setReceiveAmount(value);
              }
            }}
            value={receiveAmount}
            className="flex-1 focus:outline-none text-black text-xl p-5"
            disabled={isLoading} // Disable input when loading conversion rates
          />
          <div className="w-8 h-8">
            <Image src={logo} alt="Mr. Monei" width={32} height={32} />
          </div>
        </div>
      </div>

      {/* Loading Message */}
      {isLoading && <p className="text-center text-sm text-gray-500">Loading conversion rates...</p>}

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
      <button
        className="w-full h-[150px] text-17xl font-bold text-whitesmoke absolute bg-cover bg-center left-0 bottom-0 bg-transparent flex flex-col justify-end items-center font-montserrat"
        style={{
          backgroundImage: `url(${Ellipse.src})`,
          backgroundSize: "100% auto",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          borderRadius: "0 0 40px 40px",
          paddingBottom: "40px",
        }}
        onClick={handleBuyCoin}
      >
        Buy Coin
      </button>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        paymentMethodType={paymentMethodType}
        chosenCurrency={selectedCurrency}
        buyAmount={buyAmount}
        receiveAmount={receiveAmount}
        email={email}
        setEmail={setEmail}
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
        onConfirm={handleCheckoutConfirm}
      />
    </div>
  );
};

export default BuyCoinCard;

"use client";

import React from "react";
import { motion } from "framer-motion";
import logo from "../../../public/logo.png"
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentMethodType: "Naira" | "Crypto";
  chosenCurrency: string;
  buyAmount: string;
  receiveAmount: string;
  email: string;
  setEmail: (email: string) => void;
  walletAddress: string;
  setWalletAddress: (address: string) => void;
  onConfirm: () => void;
}

const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };
  

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  paymentMethodType,
  chosenCurrency,
  buyAmount,
  receiveAmount,
  email,
  setEmail,
  walletAddress,
  setWalletAddress,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div 
        className="bg-white rounded-3xl shadow-lg w-[90%] max-w-md p-6 relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="flex items-center justify-between mx-auto relative">
                <button
                    onClick={onClose} // Define onBack function for the back action
                    className="bg-transparent text-xl font-bold text-gray-500 hover:text-black mr-4"
                >
                    ←
                </button>
                
                <p className="text-xl font-semibold text-center flex-1">Checkout Details</p>

                <button
                    onClick={onClose}
                    className="bg-transparent text-5xl text-gray-500 hover:text-black"
                >
                    &times;
                </button>
            </div>


            <div className="mx-auto mt-4">
                <p className="text-[17px] font-[600] text-left m-auto">
                    {`You are about to purchase Mr. Monei Money token with ${paymentMethodType}`}
                </p>
                <p className="m-auto mt-2 mb-6">
                    Proceed to inputing your needed details
                </p>
            </div>

            <div className="">
                {/* Payment Card */}
                <div className="mt-6 flex items-center justify-between relative">
                {/* Left Section */}
                <div className="flex-1 text-left p-4 rounded-tl-3xl shadow-t-xl" style={{ boxShadow: '4px -4px 10px rgba(0, 0, 0, 0.2)' }}>
                    <p className="text-[13px] font-semibold text-right text-m3-ref-neutral-neutral20">You Pay</p>
                    <p className="text-xsm font-semibold text-gray-400 m-auto">{chosenCurrency}</p>
                    <p className="text-xl text-gray-400 m-auto">{buyAmount}</p>
                </div>


                {/* Middle Divider (Arrow centered) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-primary-colors rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 23 23" fill="none" className="">
                        <path d="M15.49 20.0102L20.5 14.9902H3.5M8.51 3.99023L3.5 9.01023H20.5" stroke="#F5F5F5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                
                
                {/* Right Section */}
                <div className="flex-1 text-right bg-[#D9D9D9] p-4 border-t-4 border-r-4 rounded-tr-3xl">
                    <p className="text-[13px] font-semibold text-left text-m3-ref-neutral-neutral20">You Receive</p>
                    <Image className="w-5 h-5 m-auto" alt="logo" src={logo} />
                    <p className="text-xl text-gray-400 m-auto">{receiveAmount}</p>
                </div>
                </div>

                
                <div className="space-y-4 bg-[#F0F4F5] p-4 rounded-b-3xl">

                    <div>
                        <label className="block text-md font-medium text-gray-700 my-2">
                            Wallet Address 
                            <span className="mx-1 text-gray-400 bg-none">
                                <FontAwesomeIcon icon={faInfoCircle} className="text-gray-400" />
                            </span>
                        </label>
                        
                        <input
                            type="text"
                            value={walletAddress}
                            className="mx-auto w-[90%] py-4 px-4 bg-white text-md rounded-xl text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-colors"
                            
                            onChange={(e) => setWalletAddress(e.target.value)}
                        />
                    </div>
                    
                    
                    {paymentMethodType === "Naira" && (
                        <div>
                        <label className="block text-md font-medium text-gray-700 my-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            className="mx-auto w-[90%] py-4 px-4 bg-white text-md rounded-xl text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-colors"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                    )}

                    {/* Buttons Section */}
                    <div className="flex">
                        {paymentMethodType === "Naira" ? (
                        <>
                            <button
                            className="flex bg-white border border-primary-colors text-xl text-black font-bold py-3 px-1 my-3 mx-2 rounded-lg w-[25%]"
                            onClick={() => alert("help")}
                            >
                            <span className="mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M9.09 9.5C9.3251 8.83167 9.78915 8.26811 10.4 7.90913C11.0108 7.55016 11.7289 7.41894 12.4272 7.53871C13.1255 7.65849 13.7588 8.02152 14.2151 8.56353C14.6713 9.10553 14.9211 9.79152 14.92 10.5C14.92 12.5 11.92 13.5 11.92 13.5M12 17.5H12.01M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5Z" stroke="#008EBA" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            Help
                            </button>

                            <button
                            className="bg-primary-colors text-xl text-white font-bold py-3 px-6 my-3 rounded-lg w-[75%]"
                            onClick={onConfirm}
                            disabled={!email || !walletAddress}
                            >
                            Confirm Payment
                            </button>
                        </>
                        ) : (
                        <button
                            className="bg-primary-colors text-xl text-white font-bold py-3 px-6 my-3 rounded-lg w-full"
                            onClick={() => alert("connect wallet")}
                        >
                            Connect Wallet
                        </button>
                        )}
                    </div>

                </div>
            </div>

            
        </motion.div>
    </div>
  );
};

export default CheckoutModal;

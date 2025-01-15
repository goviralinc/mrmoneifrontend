"use client";

import Image from "next/image";
import SubNav from "@/components/SubNav";
import BuyCoinCard from "@/components/BuyCoinCard";
import Button from "@/components/ui/Button";
import Logo from "../../../../public/logo.png";

export default function TransactPage() {
    return (
        <div className="max-w-full bg-white font-montserrat">
            {/* Main Container */}
            <div className="max-w-full mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-4">
                    {/* Left Section */}
                    <div className="font-montserrat pl-8 pr-0">
                        <SubNav />

                        <div className="px-8">
                            {/* Logo and Title */}
                            <div className="items-center mt-16 space-x-3">
                                
                                <h1 className="text-100xl font-[700] m-auto">
                                    <span>Mr. M</span>
                                    <span>
                                        <Image src={Logo} alt="logo" width={60} />
                                    </span>
                                    <span>nei</span>
                                </h1>
                            </div>

                            {/* Subtitle */}
                            <p className="text-40xl m-auto mt-2 font-[600]">
                                Africa’s First Stable Coin
                            </p>

                            {/* Description */}
                            <p className="mt-6 text-xl text-m3-ref-neutral-neutral20 leading-[35px]">
                                Mr. Monei is positioned to revolutionize financial transactions
                                and investments across Africa by integrating stablecoin technology,
                                blockchain infrastructure, and Aldriven services.
                            </p>

                            {/* Buttons */}
                            <div className="mt-16 flex mx-auto items-center space-x-8">
                                <Button
                                    text="Whitepaper"
                                    variant="primary"
                                    size="xl"
                                    onClick={() => console.log("Join the waitlist clicked")}
                                />
                                <Button
                                    text="About Mr. Monei"
                                    variant="secondary"
                                    size="xl"
                                    onClick={() => console.log("About Mr. Monei clicked")}
                                />
                            </div>
                        </div>
                        
                    </div>

                    
                    {/* Right Section - Transaction Form */}
                    <div className="mx-auto justify-end">
                        <BuyCoinCard />
                    </div>
                    

                </div>
            </div>
        </div>
    )
}
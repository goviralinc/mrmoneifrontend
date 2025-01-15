"use client";

import Link from 'next/link';
import Image from 'next/image';

import Button from './ui/Button';
import logo from "../../public/logo.png"

const Navbar = () => {
  return (
    <nav className="bg-white font-montserrat">
        <div className="container mx-auto px-4 py-4 pt-12 flex justify-between items-center">
            <div className="flex items-center space-x-4">
            <Image src={logo} alt='mr monei logo' width={75} height={75} />
            </div>
            <div className="hidden md:flex space-x-8">
                <div className="flex flex-row items-center justify-start gap-20 text-left text-xl">
                    <Link href="/learn" legacyBehavior>
                        <div className="relative capitalize font-medium">Learn</div>
                    </Link>
                    
                    <a className="relative capitalize font-medium">Community</a>
                    <a className="relative capitalize font-medium">EcoSystem</a>
                </div>
            </div>
            <div>
                <Button
                    text="Join the waitlist"
                    variant="primary"
                    size="xxl"
                    onClick={() => console.log("Join the waitlist clicked")}
                />
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
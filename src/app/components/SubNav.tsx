"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SubNav = () => {
  const currentPath = usePathname();

  return (
    <div className="bg-white py-8 px-auto">
      <div className="container mx-auto px-6 md:px-12 flex justify-start space-x-16 font-libre-franklin">
        <div className="relative">
          <Link href="/transact" legacyBehavior>
            <div
              className={`text-5xl tracking-[0.02em] leading-[28.8px] font-medium cursor-pointer`}
            >
              Transact
            </div>
          </Link>
          {currentPath === '/transact' && (
            <div className="absolute w-[50px] h-[4px] bg-[#008EBA] rounded-[20px] mt-2"></div>
          )}
        </div>
        <div className="relative">
          <Link href="/" legacyBehavior>
            <div
              className={`text-5xl tracking-[0.02em] leading-[28.8px] font-medium cursor-pointer`}
            >
              Introducing Mr. Monei
            </div>
          </Link>
          {currentPath === '/' && (
            <div className="absolute w-[200px] h-[4px] bg-[#008EBA] rounded-[20px] mt-2"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubNav;

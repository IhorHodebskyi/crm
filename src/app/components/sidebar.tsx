'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import SidebarItem from '@/app/components/sidebar-item';

interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image className="py-8 mb-11 mx-auto" width={122} height={25} src="/Group_1000004104.svg" alt="logo" />
        <li className="space-y-7">
          <ul>
            <SidebarItem current={pathname === '/dashboard'} pathname="/dashboard" src="/Vector.svg" alt="Dashboard">
              Dashboard
            </SidebarItem>
          </ul>
          <ul>
            <SidebarItem current={pathname === '/companies'} pathname="/companies" src="/Subtract.svg" alt="Companies">
              Companies
            </SidebarItem>
          </ul>
        </li>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto" onClick={handleExitClick}>
          <Image width={18} height={18} src="/icons/exit.svg" alt="exit icon" />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}

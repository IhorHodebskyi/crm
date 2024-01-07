'use client';
import Image from 'next/image';
import SidebarItem from './sidebar-item';

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image className="py-8 mb-11 mx-auto" width={122} height={25} src="/Group_1000004104.svg" alt="logo" />
        <li className="space-y-7">
          <ul>
            <SidebarItem pathname="/dashboard" src="/Vector.svg" alt="Dashboard">
              Dashboard
            </SidebarItem>
          </ul>
          <ul>
            <SidebarItem pathname="/companies" src="/Subtract.svg" alt="Companies">
              Companies
            </SidebarItem>
          </ul>
        </li>
        <button className="flex items-center gap-2 p-6 mt-auto mx-auto">
          <Image className="" width={18} height={18} src="/exit.svg" alt="" />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

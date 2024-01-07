import Image from 'next/image';
import SidebarItem from './sidebar-item';

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image className="" width={122} height={25} src="./icons/Group_1000004104.svg" alt="logo" />
      </div>

      <ul className="space-y-7">
        <SidebarItem pathname="/dashboard" src="" alt="">
          Dashboard
        </SidebarItem>
      </ul>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;

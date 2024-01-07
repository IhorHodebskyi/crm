import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

const SidebarItem = ({ children, pathname, src, alt }: SidebarItemProps) => {
  return (
    <>
      <a href={pathname} className="flex item-center h-9 mx-1 gap-3.5">
        <Image className="ml-5" width={18} height={18} src={src} alt={alt} />
        <span className="font-medium text-zinc-50">{children}</span>
      </a>
    </>
  );
};

export default SidebarItem;

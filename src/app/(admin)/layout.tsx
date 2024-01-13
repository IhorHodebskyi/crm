import { ReactNode } from 'react';
import Sidebar from '../components/sidebar';

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  );
}

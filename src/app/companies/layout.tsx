import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <h1> Sidebar</h1>
      <div> {children}</div>
    </>
  );
}

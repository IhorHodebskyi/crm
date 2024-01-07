import React, { Children } from 'react';
export interface LayoutProps {
  children: React.ReactNode;
  categories: React.ReactNode;
}
export default function Layout({ children, categories }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>
      <div>{categories}</div>
    </div>
  );
}

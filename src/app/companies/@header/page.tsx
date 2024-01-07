import React from 'react';

export interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <main>
      <h1 className="text-xl">Header </h1>
    </main>
  );
}

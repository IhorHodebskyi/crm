'use client';
import React from 'react';

interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div>Something global went wrong </div>
      </body>
    </html>
  );
}

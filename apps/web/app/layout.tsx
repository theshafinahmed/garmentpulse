// apps/web/app/layout.tsx
//
// The outer frame shared by every page of GarmentPulse Web.
// Every page is placed inside this layout. Owned by Mithi.

import type { ReactNode } from 'react';

export const metadata = {
  title: 'GarmentPulse',
  description: 'Machine breakdown reporting and repair dispatch for garment factories.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0 }}>{children}</body>
    </html>
  );
}

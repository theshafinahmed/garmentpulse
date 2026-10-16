// apps/web/app/page.tsx
//
// The home page of GarmentPulse Web (managers and the owner).
// For now it is only a "hello" page. It also reads one value from the shared
// toolbox (@garmentpulse/shared) to prove the two projects are connected.
// Real pages come later. Owned by Mithi.

import { ERROR_CODES } from '@garmentpulse/shared';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ marginBottom: 8 }}>GarmentPulse</h1>
      <p>For managers and the owner</p>
      <p style={{ color: '#666' }}>Shared toolbox connected: {ERROR_CODES.length} error codes</p>
    </main>
  );
}

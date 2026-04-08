import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Quoted Studio - Earned Authority Acquisition'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#09090B',
          color: '#FAFAF9',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 6,
              background: '#C8A97E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
              color: '#09090B',
            }}
          >
            Q
          </div>
          <span style={{ fontSize: 32, letterSpacing: -1 }}>
            Quoted<span style={{ color: '#C8A97E' }}>.</span>
          </span>
        </div>

        {/* Headline */}
        <div style={{ fontSize: 64, lineHeight: 1.1, letterSpacing: -2, marginBottom: 24 }}>
          Your expertise belongs
          <br />
          in the press<span style={{ color: '#C8A97E' }}>.</span>
        </div>

        {/* Sub */}
        <div style={{ fontSize: 22, color: '#9E9EA8', lineHeight: 1.5, maxWidth: 700 }}>
          Earned media mentions, high-trust backlinks, and compounding brand authority. Delivered monthly.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: '#C8A97E',
          }}
        />
      </div>
    ),
    { ...size }
  )
}

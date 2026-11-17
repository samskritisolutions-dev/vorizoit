'use client';

import React, { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Global Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          backgroundColor: '#080c09',
          color: '#f4f4f4',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <span
          style={{
            color: '#c6ff00',
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            marginBottom: '1rem',
            fontWeight: 600,
          }}
        >
          AN ERROR OCCURRED
        </span>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
          Something went wrong
        </h2>
        {error?.digest && (
          <p style={{ color: '#99a19c', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            Digest: {error.digest}
          </p>
        )}
        <button
          onClick={() => reset()}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#c6ff00',
            color: '#080c09',
            border: 'none',
            borderRadius: '9999px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}

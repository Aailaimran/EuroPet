import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maintenance - EuroPet Express',
  description: 'This website is temporarily unavailable due to maintenance.',
}

export default function MaintenancePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      margin: 0,
      padding: '20px',
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        padding: '60px 40px',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
      }}>
        {/* Icon */}
        <div style={{
          fontSize: '72px',
          marginBottom: '30px',
          opacity: 0.8,
        }}>
          🔧
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 20px 0',
          letterSpacing: '-0.5px',
        }}>
          Website Temporarily Unavailable
        </h1>

        {/* Message */}
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6',
          margin: '0 0 30px 0',
        }}>
          This website is temporarily unavailable. We are performing scheduled maintenance to improve your experience.
        </p>

        {/* Additional Info */}
        <p style={{
          fontSize: '14px',
          color: '#999',
          lineHeight: '1.6',
          margin: '0',
        }}>
          Please contact the website administrator for further information. We apologize for any inconvenience.
        </p>

        {/* Status Badge */}
        <div style={{
          marginTop: '40px',
          paddingTop: '30px',
          borderTop: '1px solid #eee',
          fontSize: '12px',
          color: '#aaa',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>
          Maintenance Mode Active
        </div>
      </div>
    </div>
  )
}

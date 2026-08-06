export const metadata = {
  title: 'Sanity Studio — Euro Pet Express',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        /* Hide navbar, footer, and other site chrome in Sanity Studio */
        header, footer, nav, .scroll-progress, .floating-whatsapp, .back-to-top {
          display: none !important;
        }
        main {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }
        body {
          background-color: #0d1117 !important;
          overflow: auto !important;
        }
      `}</style>
      {children}
    </>
  )
}

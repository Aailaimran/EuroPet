import React from 'react'

export default function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none" aria-hidden="true">
      <div 
        className="absolute w-[60vw] h-[60vw] rounded-full blur-[80px] mix-blend-screen opacity-15"
        style={{
          background: 'rgba(201, 168, 76, 0.15)',
          animation: 'floatBlob1 20s infinite alternate ease-in-out',
        }}
      />
      <div 
        className="absolute w-[50vw] h-[50vw] rounded-full blur-[80px] mix-blend-screen opacity-10"
        style={{
          background: 'rgba(201, 168, 76, 0.08)',
          animation: 'floatBlob2 25s infinite alternate ease-in-out',
        }}
      />
      <div 
        className="absolute w-[70vw] h-[40vw] rounded-full blur-[80px] mix-blend-screen opacity-5"
        style={{
          background: 'rgba(99, 102, 241, 0.06)',
          animation: 'floatBlob3 18s infinite alternate ease-in-out',
        }}
      />
      <div 
        className="absolute w-[40vw] h-[40vw] rounded-full blur-[80px] mix-blend-screen opacity-5"
        style={{
          background: 'rgba(201, 168, 76, 0.05)',
          animation: 'floatBlob4 30s infinite alternate ease-in-out',
        }}
      />
      <div 
        className="absolute w-[55vw] h-[55vw] rounded-full blur-[80px] mix-blend-screen opacity-5"
        style={{
          background: 'rgba(14, 165, 233, 0.04)',
          animation: 'floatBlob5 22s infinite alternate ease-in-out',
        }}
      />
    </div>
  )
}

import React from 'react'

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none" aria-hidden="true">
      <div 
        className="absolute w-[300px] h-[300px] rounded-full blur-[60px]"
        style={{
          background: 'rgba(201, 168, 76, 0.12)',
          top: '10%',
          left: '5%',
          animation: 'orbFloat1 8s ease-in-out infinite alternate',
        }}
      />
      <div 
        className="absolute w-[200px] h-[200px] rounded-full blur-[40px]"
        style={{
          background: 'rgba(201, 168, 76, 0.08)',
          top: '60%',
          right: '10%',
          animation: 'orbFloat2 11s ease-in-out infinite alternate',
        }}
      />
      <div 
        className="absolute w-[150px] h-[150px] rounded-full blur-[30px]"
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          bottom: '20%',
          left: '30%',
          animation: 'orbFloat3 14s ease-in-out infinite alternate',
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: 'rgba(201, 168, 76, 0.05)',
          top: '30%',
          right: '20%',
          animation: 'orbFloat4 9s ease-in-out infinite alternate',
        }}
      />
      <div 
        className="absolute w-[100px] h-[100px] rounded-full blur-[20px]"
        style={{
          background: 'rgba(201, 168, 76, 0.2)',
          top: '80%',
          left: '60%',
          animation: 'orbFloat5 7s ease-in-out infinite alternate',
        }}
      />
      <div 
        className="absolute w-[250px] h-[250px] rounded-full blur-[50px]"
        style={{
          background: 'rgba(99, 102, 241, 0.06)',
          top: '15%',
          right: '40%',
          animation: 'orbFloat6 16s ease-in-out infinite alternate',
        }}
      />
    </div>
  )
}

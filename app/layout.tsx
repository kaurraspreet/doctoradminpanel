import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-screen w-screen flex'>
      <Navbar />
      <Sidebar />
      <div className='w-full flex-1 overflow-auto h-screen p-6'>{children}</div>
    </div>
  )
}

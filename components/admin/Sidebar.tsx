// components/Sidebar.tsx
import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  type RoutesList = {
    name: string
    href: string
    id: string
  }
  const routes: RoutesList[] = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      id: 'dashboard'
    },
    {
      name: 'Appointments',
      href: '/dashboard/appointments',
      id: 'appointments'
    },
    {
      name: 'Services',
      href: '/dashboard/services',
      id: 'services'
    },
    {
      name: 'Orders',
      href: '/dashboard/orders',
      id: 'orders'
    },
    {
      name: 'Payments',
      href: '/dashboard/payments',
      id: 'payments'
    }
  ]

  return (
    <div className='bg-gray-800 text-white w-64 sticky top-0 h-screen	'>
      <div className='py-4'>
        <h2 className='text-2xl font-semibold px-6 pb-3 mb-3 border-b border-indigo-200'>
          LOGO
        </h2>
        <ul className='p-4 mx-2'>
          {routes.map((data, idx) => {
            const { name, href } = data
            return (
              <li key={idx} className='mb-4'>
                <Link href={href} className='text-lg'>
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

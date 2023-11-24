import React from 'react'
import SvgIcon from '../SvgIcon'

const Sidebar = () => {
  type RoutesList = {
    name: string
    href: string
    id: string
    icon: string
  }
  const mainRoutes: RoutesList[] = [
    {
      name: 'Dashboard',
      href: '/',
      id: 'dashboard',
      icon: 'dashboard'
    },
    {
      name: 'Appointments',
      href: '/appointments',
      id: 'appointments',
      icon: 'appointments'
    },
    {
      name: 'Customers',
      href: '/customers',
      id: 'customers',
      icon: 'users'
    },
    {
      name: 'Payments',
      href: '/payments',
      id: 'payments',
      icon: 'payments'
    }
  ]

  const otherRoutes: RoutesList[] = [
    {
      name: 'Blogs',
      href: '/blogs',
      id: 'blogs',
      icon: 'blog'
    },
    {
      name: 'Comments',
      href: '/comments',
      id: 'comments',
      icon: 'comments'
    },
    {
      name: 'Profile',
      href: '/profile',
      id: 'profile',
      icon: 'profile'
    },
    {
      name: 'Logout',
      href: '/logout',
      id: 'logout',
      icon: 'logout'
    }
  ]

  return (
    <>
      <aside
        id='separator-sidebar'
        className='fixed top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              {mainRoutes.map(({ name, href, id, icon }) => (
                <a
                  href={href}
                  id={id}
                  className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <SvgIcon
                    name={icon}
                    className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white'
                  />
                  <span className='ms-3'>{name}</span>
                </a>
              ))}
            </li>
          </ul>
          <ul className='pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700'>
            <li>
              {otherRoutes.map(({ name, href, id, icon }) => (
                <a
                  href={href}
                  id={id}
                  className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <SvgIcon
                    name={icon}
                    className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white'
                  />
                  <span className='ms-3'>{name}</span>
                </a>
              ))}
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

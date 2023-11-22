'use client'

import React from 'react'
import Button from './ui/Button'
import { ArrowIcon } from './SvgIcon'
import { useRouter } from 'next/navigation'

export default function Header () {
  const router = useRouter()
  return (
    <div>
      <h1 className='text-3xl font-bold'>
        Unlock Your Social Potential - Tailored Services for Every Platform
      </h1>
      <div className='py-6'>
        <Button
          text='Start Now'
          onClick={() => router.push('/#select-platform')}
          icon={<ArrowIcon className='w-4' />}
          className='bg-black text-brown-200 flex flex-row-reverse items-center gap-3 !py-3 !px-6 text-sm font-normal'
          iconPosition='before'
        />
      </div>
    </div>
  )
}

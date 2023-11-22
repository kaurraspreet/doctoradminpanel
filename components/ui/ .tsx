'use client'

import clsx from 'clsx'
import React from 'react'

type Props = {
  value?: string
  label?: string
  placeholder: string
  className?: string
  onChange?: (value: string) => void
  error?: string
}

const TextInput = ({
  label,
  placeholder,
  className,
  value,
  onChange,
  error
}: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className=''>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        {label}
      </label>
      <input
        className={clsx(
          'w-full p-6 bg-transparent border border-black rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300',
          className,
          {
            '!border-red-600': !!error && !!value
          }
        )}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
      {!!value && !!error && (
        <div className='py-1'>
          <p className='text-red-700 text-xs'>{error}</p>
        </div>
      )}
    </div>
  )
}

export default TextInput

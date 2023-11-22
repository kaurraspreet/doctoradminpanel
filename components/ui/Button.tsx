'use client'

import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  varient?: 'secondary' | 'primary'
  text: string
  size?: 'sm' | 'lg' | 'md'
  icon?: React.ReactNode
  iconPosition?: 'before' | 'after'

  disabled?: boolean
}

const Button = ({
  text,
  varient,
  size,
  className,
  icon,
  iconPosition = 'before',
  disabled,
  ...rest
}: Props) => {
  return (
    <button
      className={clsx(
        'border border-black px-8 py-2 rounded-lg disabled:opacity-25 hover:bg-black duration-300 cursor-pointer hover:text-white',
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {iconPosition === 'before' && icon}
      {text}
      {iconPosition === 'after' && icon}
    </button>
  )
}

export default Button

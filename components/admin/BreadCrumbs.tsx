import Link from 'next/link'
import React from 'react'

interface Breadcrumb {
  label: string
  href?: string
}

interface BreadCrumbsProps {
  breadcrumbs: Breadcrumb[]
}

export default function BreadCrumbs ({ breadcrumbs }: BreadCrumbsProps) {
  return (
    <div className='flex items-center justify-between'>
      <h2 className='font-bold text-2xl'>{breadcrumbs.at(-1)?.label}</h2>
      <div>
        {!!breadcrumbs.length &&
          breadcrumbs.map(({ label, href }, idx) => {
            return (
              <span key={idx}>
                {idx > 0 && ' / '}
                {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}
              </span>
            )
          })}
      </div>
    </div>
  )
}

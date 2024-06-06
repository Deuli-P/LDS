'use client'

import React from 'react'
import { CTAType } from '@/lib/types'




const CtaSecondary = ({children, onClick}:CTAType) => {
  return (
    <button 
        className='py-3 px-6 rounded-lg bg-blanc border-1 border-primary text-noir font-bold font-roboto'
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default CtaSecondary
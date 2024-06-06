'use client'

import React from 'react'
import { CTAType } from '@/lib/types'



const CtaThirdy = ({children, onClick}:CTAType) => {
  return (
    <button 
        className='py-3 px-6 rounded-lg bg-gris text-noir font-bold font-roboto '
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default CtaThirdy
'use client'

import React from 'react'
import { CTAType } from '@/lib/types'



const CtaPrimary = ({children, onClick}:CTAType) => {
  return (
    <button 
        className='py-4 px-6 rounded-lg bg-secondary text-blanc font-bold font-roboto'
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default CtaPrimary
'use client'

import React from 'react'
import { CTAType } from '@/lib/types'



const CtaPrimary = ({children, onClick}:CTAType) => {
  return (
    <button 
        className='w-full py-3 px-6 rounded-3xl bg-primary-light  text-texte-light font-bold font-roboto'
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default CtaPrimary
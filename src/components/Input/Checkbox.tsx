
import React, { useEffect, useState } from 'react'

type checkBoxType = {
    label: string
    onCheckbox: (value:boolean)=> void
    name: string
}

const Checkbox = ({label,onCheckbox,name}: checkBoxType) => {

    const [ isCheck, setIsCheck ] = useState(false)

    useEffect(()=>{
        onCheckbox(isCheck)
    },[isCheck])


  return (
        <label 
            htmlFor={name}
            className='flex items-start relative justify-start w-full'
        >
            <input 
                type="checkbox" 
                name={name}
                checked={isCheck}
                onChange={()=>setIsCheck(prev=> !prev)}
                className={`appearance-none relative peer mr-1 mt-1 w-4 h-4 rounded-full ring-1 ring-primary-light bg-background-light  `}
                />
                <svg
                    className="absolute w-6 h-6 pointer-events-none -top-1  hidden peer-checked:block stroke-valid mt-1 outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            <span 
                className='w-[90%] text-[12px]'
            >
                {label}
            </span>
        </label>
  )
}

export default Checkbox
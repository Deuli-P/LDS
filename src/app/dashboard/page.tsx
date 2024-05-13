import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
        Hello world
        <Link   href={`/dashboard/${id}`} >
            Click me
        </Link>
    </div>
  )
}

export default Page

//  lds.com/dashboad 
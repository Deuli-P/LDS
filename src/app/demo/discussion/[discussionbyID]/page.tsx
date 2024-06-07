import React from 'react'
import Link from 'next/link'

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

import React from 'react'
import Femme from '@/../../LDS/public/assets/images/avatar/blonde-lamy.png'
import Image from 'next/image';

const Avatar = () => {
  return (
    <div>
      <Image src={Femme} width={200} height={0} alt="Jeune femme blonde"/>
    </div>
  )
}

export default Avatar

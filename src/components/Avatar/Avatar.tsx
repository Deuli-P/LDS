import React from 'react'
import Femme from '@/../public/assets/images/avatar/blonde-lamy.png'
import Image from 'next/image';

const Avatar = () => {
  let user = 'me'
  return (
    <div>
      { user === 'me' ?
        <Image src={Femme} width={200} height={0} alt="Jeune femme blonde"/>
        :
        null
      }
    </div>
  )
}

export default Avatar

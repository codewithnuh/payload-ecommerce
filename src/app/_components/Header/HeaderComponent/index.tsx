import { Header } from '@/payload/payload-types'
import React from 'react'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import Image from 'next/image'
import classes from './index.module.scss'
const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav className={`${[classes.header]}`}>
      <Gutter className={`${[classes.wrap]}`}>
        <Link href={'/'}>
          <Image src={'/logo-black.svg'} width={170} height={50} alt="Logo" />
        </Link>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent

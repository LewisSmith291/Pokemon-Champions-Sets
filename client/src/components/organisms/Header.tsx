import React from 'react'
import Logo from '/Logo.png'

import './Header.css'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <img id="logo" src={Logo}/>
      <h1>Log in</h1>
    </header>
  )
}
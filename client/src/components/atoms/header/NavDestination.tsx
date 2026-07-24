import React from 'react'

interface Props {
  name: string;
  link: string
}

export default function NavDestination({name, link}: Props) {
  return (
    <li><a href={link}>{name}</a></li>
  )
}
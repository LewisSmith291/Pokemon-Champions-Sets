import React from 'react'

interface TypeProp {
  type: string
}

export default function TypeDisplay({type}: TypeProp) {
  const typeString = type;
  return (
    <div className={"type-notch "+ typeString}>{typeString}</div>
  )
}
import React from 'react'

interface Props {
  isBoost: boolean;
}

export default function NatureBoost(isBoost: Props) {
  return (
    <div className={isBoost ? "nature-up" : "nature-down"}>(\lor \)</div>
  )
}
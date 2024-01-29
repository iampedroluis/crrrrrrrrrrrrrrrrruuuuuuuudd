import React from 'react'
import './Loader.css'

export const Loader = () => {
  return (
    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <div className="lds-roller">
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  </div>
</div>

  )
}

import React from 'react'
import axios from 'axios'

function stripeSuccess() {
    const myName=`Obinna`
  return (
    <div>
    <h1>PAYMENT IS SUCCESSFUL</h1>

    <h3> Thanks <span style={{color:"green", textDecoration:"capitalize"}}>{myName}</span>welcome on board!!</h3>
    </div>
  )
}

export default stripeSuccess
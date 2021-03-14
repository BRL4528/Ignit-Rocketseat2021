import React, { useState } from 'react';

export function Counter() {
 const [incrementOne, setIncrementOne] = useState(0)

 function increment() {
  setIncrementOne(incrementOne + 1)
 }


  return (
    <div>
      <h2>{incrementOne}</h2>
      <button type="button" onClick={() => increment()} >Increment 1</button>
    </div>
  )
}
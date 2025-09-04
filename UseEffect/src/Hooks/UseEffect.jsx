import React from 'react'
import { useEffect } from 'react'


const UseEffect = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Counter...');
    } , 1000)
    return () => {
      clearInterval(interval)
      console.log('cleanup function');
    }
  } , [])

  return (
    <>
      <div >UseEffect timer</div>
    </>
  )
}

export default UseEffect
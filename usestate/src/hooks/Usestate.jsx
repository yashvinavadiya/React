import React from 'react'
import { useState } from 'react'


function Usestate() {

    // const [state, setstate]=usestate(intialstate)
   
    const [name,setname]=useState('')
    const [email,setemail]=useState('')

function handlesubmit(e){
  e.preventDefault()
  setname(e.target.name.value)
  setemail(e.target.email.value)
}
  return (
    <>
    <form onSubmit={handlesubmit}>
        <input type="text" name="name"></input><br />
         <input type="email" name="email"></input><br />
        <button type='submit'>
          submit
        </button>
    </form>
    <p>{name}{email}</p>

    </>
  )
}

export default Usestate
import React from 'react'

const Condition = () => {
  return (
   < Productlist/>
  )
}

export const Product = (props) =>{
 if (props.stock <= 10)
 {
  return <li style={{color:"red",listStyle:'none'}}>{props.name}</li>
 }
 else if (props.stock <= 50 )
  {
  return <li style={{color:"blue",listStyle:'none'}}>{props.name}</li>
 }
 else  (props.stock < 60 )
  {
  return <li style={{color:"green",listStyle:'none'}}>{props.name}</li>
 }
 

}

export  const Productlist = () =>{
  return (
    <ul>
     <Product name="clock" stock={10}/>
     <Product name="laptop" stock={20}/>
     <Product name="tablet" stock={30}/>
     <Product name="ipad" stock={40}/>
     <Product name="computer" stock={50}/>
     <Product name="televishion" stock={60}/>
     <Product name="drone" stock={70}/>
     <Product name="mobile" stock={80}/>

    </ul>
  )

}


export default Condition
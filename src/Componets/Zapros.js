import React, { useEffect, useState } from 'react'
import './zapros.css'

function Zapros() {

 const[photo, setPhoto] = useState([])

useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
     .then((result) => result.json())
     .then(p =>{ setPhoto(p)
     console.log(p)})
     
    }, [])

            

  return (
   
    <div className='cont'>
       {photo.map((user) => {
           
        return (
            <div key={user.id} className='cont1'>
                <span>{user.id}</span>
                <div>
               <h4>{user.title}</h4>
               <p className='p'>text</p>
               </div>
               <img  className='img' src={user.url}/>
 
            </div>
        )
})}
    </div>
  )
}

export default Zapros
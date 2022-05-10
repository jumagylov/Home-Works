import React, { useEffect, useRef, useState } from 'react'
import './Block.css'

function Block() {

    const refc = useRef()
    
    const [block, setBlock] = useState()

    useEffect(() => {
        setTimeout(() => {
            setBlock(!block)

        }, 1000)
        block  ? refc.current.style.background = 'red' : refc.current.style.background = 'green'
    })
    

  return (
    <div className='container' ref={refc}>
         
    </div>
  )
}

export default Block
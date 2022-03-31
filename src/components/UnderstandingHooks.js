import React, { useState } from 'react'

export default function UnderstandingHooks() {
    const [count, setcount] = useState(() => {
        console.log("Run Function")
        return 5;
    })

    function decrementCount(){
        setcount((prevCount) => (prevCount)-1)
    }

    function incrementCount(){
        setcount((prevCount) => (prevCount)+1)
    }

    return (
    <>   
        <div className='container'>
            <button type="button" class="btn btn-success" onClick={decrementCount}>-</button>
            <span>                    {count}                         </span>
            <button type="button" class="btn btn-success" onClick={incrementCount}>+</button>
        </div>  
    </>  
  )
}

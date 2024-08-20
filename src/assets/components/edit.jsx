import React from 'react'
import { useState } from 'react'

function edit() {
    const [add, setAdd] = useState([])

    console.log(add);
  return (
    <div>
         <form >
          <input className='input' type="text" placeholder='Add Your Task ' value={add} required onChange={(event) => setAdd(event.target.value)} />
          <button className='btn' type="Submit" onClick={Submit}  >Add task</button>
        </form>
    </div>
  )
}

export default edit
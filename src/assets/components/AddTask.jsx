import React from 'react'
import { useState } from 'react'

function addtask({ Additems }) {
  const [add, setAdd] = useState()


  const Submit = (e) => {
    e.preventDefault()
    alert("task added successfully", Additems(add))
    setAdd("")

  }

  return (
    <>
      <div>
        <form >
          <input className='input' type="text" placeholder='Add Your Task ' value={add} required onChange={(event) => setAdd(event.target.value)} />
          <button className='btn' type="Submit" onClick={Submit}  >Add task</button>
        </form>
      </div>

    </>
  )
}

export default addtask
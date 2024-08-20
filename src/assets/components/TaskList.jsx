import React from 'react'
import { useState } from 'react'
import Addtask from './addtask'
import Edit from './edit'



function TaskList() {
    const [task, setTask] = useState([])

    const add = (items) => {
        setTask([...task, { items, status: false }])

    }

    const Delete = (index) => {
        const deleteVal = [...task]
        deleteVal.splice(index, 1)
        alert("Are you Sure?", setTask(deleteVal))
    }

    // const editbutton=()=>{


    // }


    const onfilter = (event, data) => {
        const filter1 = task.filter((obj) => {
            if (obj === data) {
                const value = event.target.checked
                obj.status = value

            }

            return obj
        })
        console.log(task)
        setTask(filter1)

    }


    return (
        <>
          <Addtask Additems={add} />
            <div className='main-div'>

                <div className='second-div'>
                    <h1>TO DO LIST</h1>
                  

                    <div>
                        {
                            task.map((data, index) => (
                                <div className='flex'>
                                    <input type="checkbox" checked={data.status} onClick={(event) => onfilter(event, data)} />

                                    <div className='h1'>

                                        <h1 >{data.items}</h1>
                                    </div>
                                    <i class="fa fa-edit fa-2x" onClick={() => { }} ></i>

                                    <i className='delete' class="fa fa-trash fa-2x" onClick={() => (Delete(index))}></i>
                                </div>

                            ))
                        }
                    </div>


                </div>

            </div>
        </>
    )
}

export default TaskList
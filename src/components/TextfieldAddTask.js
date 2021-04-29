import './css/TextfieldAddTask.css'
import React from 'react'
import { useState, useEffect } from "react";

export const TextfieldAddTask = (props) => {
    const [input, setInput] = useState("")

    // TEST
    useEffect(() => {
        console.log("input: " + input)
    }, [input])

    const updateValue = (e) => {
        setInput(e.target.value)
    }

    const addNewTask = (e) => {
        // Add new task to list
        props.setTasks([...props.tasks, input])

        // Reset input for next task
        setInput("")
    }

    return(
        <div id={'textfield-add-task'}>
            <input
                type='text'
                value={input}
                onChange={(e) => (updateValue(e))}
            />
            <button className='submit' onClick={addNewTask}>+</button>
        </div>
    )
    
}
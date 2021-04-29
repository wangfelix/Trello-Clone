import './css/ToDoList.css'
import React from 'react'
import { useState, useEffect } from "react";
import { TextfieldAddTask }  from './TextfieldAddTask.js'
import { BulletPoint } from './BulletPoint.js'

export const ToDoList = (props) => {

    const [tasks, setTasks] = useState([])

    return (
        <div className='todo-list'>
            <ListBar toDoListName = { props.name }/>
            <div className='bullet-point-container'>
                {tasks.map(task => (
                    <BulletPoint task = { task }/>
                 ))}

                <TextfieldAddTask tasks={ tasks } setTasks={ setTasks }></TextfieldAddTask>
            </div>
        </div>
    )
}

const ListBar = (props) => {

    // useEffect(() => {setName('TODo List')}, [])

    return (
        <div className='list-bar'>
            <h2>{ props.toDoListName }</h2>
            {/* <input type='text' value={props.toDoListName}></input> */}
        </div>
    )
}
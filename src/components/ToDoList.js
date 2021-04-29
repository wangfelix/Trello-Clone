import './css/ToDoList.css'
import React from 'react'
import { useState, useEffect } from "react";
import { TextfieldAddTask }  from './TextfieldAddTask.js'
import { BulletPoint } from './BulletPoint.js'

export const ToDoList = (props) => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {console.log(props.listKey)}, [])

    return (
        <div className='todo-list'>
            <ListBar
                toDoListName = { props.name }
                toDoLists = { props.toDoLists }
                setToDoLists = { props.setToDoLists }
                id = { props.id }
            />
            <div className='bullet-point-container'>
                {tasks.map((task, index) => (
                    <BulletPoint task = { task } key={ index }/>
                 ))}

                <TextfieldAddTask tasks={ tasks } setTasks={ setTasks }></TextfieldAddTask>
            </div>
        </div>
    )
}

const ListBar = (props) => {

    const setName = (e) => {

        let tempArr = [...props.toDoLists]

        for (let i = 0; i < props.toDoLists.length; i++) {
            if (props.id === props.toDoLists[i].id) {
                tempArr[i].name = e.target.value
            }
        }
        props.setToDoLists(tempArr)

    }

    return (
        <div className='list-bar'>
            <input
                className='list-title'
                type='text'
                value={props.toDoListName}
                onChange={setName}
            />
        </div>
    )
}
import './css/CreateListBtn.css'
import React from 'react'

export const CreateListBtn = (props) => {

    const addList = () => {
        props.setToDoLists([...props.toDoLists, { name: 'ToDo List', id: new Date().getTime() }])
    }

    return (
        <button className='create-new-list-btn' onClick={addList}>+</button>
    )
}
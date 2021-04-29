import './css/CreateListBtn.css'
import React from 'react'

export const CreateListBtn = (props) => {

    const addList = () => {
        props.setToDoLists([...props.toDoLists, { name: 'ToDo List' }])
    }

    return (
        <button className='create-new-list-btn' onClick={addList}>+</button>
    )
}
import './css/BulletPoint.css'
import React from 'react'
import { useState, useEffect } from "react";

export const BulletPoint = (props) => {
    const [ischecked, setIsChecked] = useState(false)

    const toggleCheck = () => {
        setIsChecked(prevCheck => !prevCheck)
    }

    // TEST
    useEffect(() => {
        console.log(ischecked)
    }, [ischecked])
    // END TEST

    
    return (
        <div class='bullet-point'>
            <div
                className='checkbox'
                data-checked={ ischecked }
                onClick={ toggleCheck }
            />
            <label data-checked={ ischecked }>
                { props.task }
            </label>
        </div>
        
    )
}
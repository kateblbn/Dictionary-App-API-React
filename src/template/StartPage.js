import React from 'react'
import arrow from '../images/arrow.png'
import startPage from '../css/startPage.module.css'
function StartPage() {
    return (
        <div className={startPage.wrap}>
            <div className={startPage.title}>Start write something</div>
            <img className={startPage.image} src={arrow} alt='arrow' />
        </div>
    )
}

export default StartPage
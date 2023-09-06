import React from 'react'
import logo from '../images/logo.svg'
import down from '../images/icon-arrow-down.svg'
import moon from '../images/icon-moon.svg'
import search from '../images/icon-search.svg'
import home from '../css/home.module.css'

function Home() {
    return (
        <div className={home.containerWrap}>
            <div className={home.wrapper}>
                <div className={home.imageLogo}>
                    <img src={logo} alt='logo' />
                </div>
                <div className={home.wrapRightSide}>
                    <div className={home.fonts}>
                        <div className={home.font}>Sans Serif</div>
                        <img src={down} alt='down' />
                    </div>
                    <div className={home.line}></div>
                    <div className={home.wraptheme}>
                        <div className={home.theme}>
                            <div className={home.circle}></div>
                            <div className={home.rectangle}></div>
                        </div>
                        <div className={home.imageMoon}>
                            <img src={moon} alt='moon' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={home.search}>
                <input className={home.searchInput} type='requared' placeholder='Search for any word…' />
                <div className={home.inputImg}>
                    <button className={home.btn}>
                        <img src={search} alt='search' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home
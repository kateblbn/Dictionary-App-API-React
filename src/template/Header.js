import React, { useContext, useState } from 'react'
import home from '../css/home.module.css'
import logo from '../images/logo.svg'
import down from '../images/icon-arrow-down.svg'
import moon from '../images/icon-moon.svg'
import search from '../images/icon-search.svg'
import { DataContext } from '../App'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from '../theme/theme'


function Header() {
    const [inpValue, setInpValue] = useState('');
    const { btnVal, setBtnVal } = useContext(DataContext)

    const [theme, setTheme] = useState('light');
console.log(theme);
    const switchTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
const changevalue = () => {
    if(theme === 'light') {
        console.log('yes') }
}

    const getInputValue = (event) => {
        const inputValue = event.target.value;
        setInpValue(inputValue)
    }

    return (
        <div>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

                <GlobalStyles />


                <div div className={home.containerWrap} >
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
                                <div onClick={switchTheme}  className={home.theme}>
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
                        <input onChange={getInputValue} /*onKeyDown={getInputKeyDown}*/ value={inpValue} className={home.searchInput} type='requared' placeholder='Search for any word…' />
                        <div className={home.inputImg}>
                            <button className={home.btn} onClick={() => setBtnVal(inpValue)}>
                                <img src={search} alt='search' />
                            </button>
                        </div>
                    </div>
                </div>
                </ThemeProvider >

        </div>
    )
}

export default Header
import React, { useContext, useState } from 'react'
import home from '../css/home.module.css'
import logo from '../images/logo.svg'
import down from '../images/icon-arrow-down.svg'
import up from '../images/icon-arrow-up.svg'
import moon from '../images/icon-moon.svg'
import search from '../images/icon-search.svg'
import '../css/popUp.css'
import { DataContext } from '../App'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from '../theme/theme'


function Header() {
    const [inpValue, setInpValue] = useState('');
    const { btnVal, setBtnVal, fonts, setFonts } = useContext(DataContext)
    const [theme, setTheme] = useState('light');
    const [open, setOpen] = useState(false)
    console.log(open);
    const changeSans = () => setFonts((prevState) => (!prevState) ? 'sans__font' : 'sans__font');
    const changeSerif = () => setFonts((prevState) => (!prevState) ? 'serif__font' : 'serif__font');
    const changeMono = () => setFonts((prevState) => (!prevState) ? 'mono__font' : 'mono__font');

    const popUp = (open === true) ? 'pop_active' : 'pop_noactive';
    const closePopUp = () => {
        setOpen(false)
    }


    // const closePopUp = (open) ? 'open' : 'close';

    const switchTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const getInputValue = (event) => {
        const inputValue = event.target.value;
        setInpValue(inputValue)
    }

    return (
        <div >
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

                <GlobalStyles />
                <div div className={home.containerWrap} >
                    <div className={home.wrapper}>
                        <div className={home.imageLogo}>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className={home.wrapRightSide}>
                            <div className={home.wrapRightSideFlex} >
                                <div onClick={() => setOpen(true)} className={home.fonts}>
                                    <div className={home.font}>Sans Serif</div>
                                    <img className={(open === true)? 'hideImg': 'imgPop'} src={down} alt='down' width='12px'/>
                                </div>
                                <img className={(open === false)? 'hideImg': 'margin'} onClick={closePopUp} src={up} alt='up' width='12px' />
                            </div>

                            <div className={popUp}>
                                <div className='closePopUp'
                                // onClick={React.useEffect(() => {
                                //     document.addEventListener('onmousedown', setOpen)
                                //     return () => document.removeEventListener('onmousedown', setOpen)
                                // }, [])}
                                >
                                    <span className='pop__wrap'>
                                        <p onClick={closePopUp}></p>
                                        <p onClick={changeSans} className='pop__sans'>Sans Serif</p>
                                        <p onClick={changeSerif} className='pop__serif'>Serif</p>
                                        <p onClick={changeMono} className='pop__mono'>Mono</p>

                                    </span>
                                </div>
                            </div>
                            <div className={home.line}></div>
                            <div className={home.wraptheme}>
                                <div onClick={switchTheme} className={home.theme}>
                                    <span className={home.circle}></span>
                                    <span className={home.rectangle}></span>
                                </div>
                                <div className={home.imageMoon}>
                                    <img src={moon} alt='moon' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={home.search}>
                        <input
                            onKeyDown={(e) => { if (e.key === 'Enter') { setBtnVal(e.target.value) } }}
                            onChange={getInputValue}
                            value={inpValue}
                            className={home.searchInput}
                            type='requared'
                            placeholder='Search for any word…' />
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
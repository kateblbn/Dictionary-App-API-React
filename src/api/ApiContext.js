import React, { createContext, useEffect, useState } from 'react'
import logo from '../images/logo.svg'
import down from '../images/icon-arrow-down.svg'
import moon from '../images/icon-moon.svg'
import search from '../images/icon-search.svg'
import home from '../css/home.module.css'
import TemplateGeneral, { TemmplateSynAnt, TemplateDefin } from '../template/TemplateGeneral'


export const DataContext = createContext()

function ApiContext(props) {
    const [wordData, setWordData] = useState([])
    console.log(wordData);
    const [inpValue, setInpValue] = useState('');
    const [category, setCategory] = useState('en')
    const [error, setError] = useState('')
    console.log(error);

    const [btnVal, setBtnVal] = useState('welcome');

    const LINK = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${btnVal}`
    useEffect(() => {
        try {
            async function data() {
                await fetch(LINK, {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(elem => setWordData(elem))
            }
            // setError(null);
            data()
        } catch (err) {
            setError(err)
            console.log('Found some errors');
        }
    }, [LINK])
    const getInputValue = (event) => {
        const inputValue = event.target.value;
        setInpValue(inputValue)
    }

    if (Array.isArray(wordData)) {

        const generalWord = wordData.map(el => el.word)
        const audio = wordData.map(el => el.phonetics.map(el => el.audio))

        const phonetic = wordData.map(el => el.phonetic)

        const genFilteredWord = generalWord.filter((e, i) => generalWord.indexOf(e) === i)
        const GetSource = wordData.map(el => {
            let c = el.sourceUrls
            return <div><a className={home.fs} href={c}>{c}</a></div>
        })
        const GetMeanings = wordData.map(el => {
            const verb = el.meanings.map(elem => {
                //noun, verb, interjection
                const partOfSpeech = elem.partOfSpeech;
                const definitions = elem.definitions.map(el => <TemplateDefin defin={el.definition} />)
                const synonyms = elem.synonyms.map(el => <TemmplateSynAnt synon={el} />)
                const antonyms = elem.antonyms.map(el => <TemmplateSynAnt anton={el} />)
                return (
                    <>
                        <TemplateGeneral part={partOfSpeech} def={definitions} synonym={synonyms} antonym={antonyms} />
                    </>
                )
            })
            return verb
        })

        return (
            <>
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
                        <input onChange={getInputValue} className={home.searchInput} type='requared' placeholder='Search for any word…' />
                        <div className={home.inputImg}>
                            <button className={home.btn} onClick={() => setBtnVal(inpValue)}>
                                <img src={search} alt='search' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={home.container}>
                    <div className={home.word}>
                        <h1 className={home.genWord}>{genFilteredWord}</h1>
                    </div>
                    <div className={home.phonet}>
                        <p className={home.phonetGen}>{phonetic}</p>
                    </div>
                    <div>
                        <audio controls>
                            <source src={audio} type='audio/mp3' />
                        </audio>
                    </div>
                    <div className={home.meaning}>
                        {GetMeanings}
                    </div>
                    <div className={home.source}>
                        <div className={home.sourceFilter}>  <span className={home.fs}>{GetSource}</span> </div>
                    </div>
                </div>
            </>
        )

    } else {
        return <div>
            <p> {wordData.title} </p>
            <p> {wordData.message} </p>
            <p> {wordData.resolution} </p>

        </div>


    }
}

export default ApiContext









// function ApiContext(props, {btnVal, inpValue}) {
//     const [wordData, setWordData] = useState([])
//     const word = 'mother'
//     console.log(btnVal);
//     const LINK = `https://api.dictionaryapi.dev/api/v2/entries/en/${inpValue}`
//     useEffect(() => {
//         try {
//             async function data() {
//                 await fetch(LINK, {
//                     method: 'GET'
//                 })
//                     .then(response => response.json())
//                     .then(elem => setWordData(elem))
//             }
//             data()
//         } catch (error) {
//             console.log('Found some errors');
//         }
//     }, [LINK])
//     const SendWord = { wordData }
//     return (
//         <>
//             <DataContext.Provider value={SendWord}>{props.children}</DataContext.Provider>
//         </>
//     )
// }

// export default ApiContext;






// function Home() {
//     const [inpValue, setInpValue] = useState('hi');
//     const [btnVal, setBtnVal] = useState('hello');
//     console.log(btnVal);
//     const getInputValue = (event) => {
//         const inputValue = event.target.value;
//         setInpValue(inputValue)
//         }
//     return (
//         <div className={home.containerWrap}>
//             <div className={home.wrapper}>
//                 <div className={home.imageLogo}>
//                     <img src={logo} alt='logo' />
//                 </div>
//                 <div className={home.wrapRightSide}>
//                     <div className={home.fonts}>
//                         <div className={home.font}>Sans Serif</div>
//                         <img src={down} alt='down' />
//                     </div>
//                     <div className={home.line}></div>
//                     <div className={home.wraptheme}>
//                         <div className={home.theme}>
//                             <div className={home.circle}></div>
//                             <div className={home.rectangle}></div>
//                         </div>
//                         <div className={home.imageMoon}>
//                             <img src={moon} alt='moon' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className={home.search}>
//                 <input onChange={getInputValue} className={home.searchInput} type='requared' placeholder='Search for any word…' />
//                 <div className={home.inputImg}>
//                     <button className={home.btn} onClick={() => setBtnVal(inpValue)}>
//                         <img src={search} alt='search' />
//                     </button>
//                 </div>
//             </div>
//             {/* <ApiContext inpValue={btnVal}/> */}
//         </div>
//     )
// }


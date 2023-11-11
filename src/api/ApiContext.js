import React, { createContext, useContext, useEffect, useState } from 'react'
import home from '../css/home.module.css'
import error from '../css/error.module.css'
import TemplateGeneral, { TemmplateSynAnt, TemplateDefin } from '../template/TemplateGeneral'
import { DataContext } from '../App'
import StartPage from '../template/StartPage'


// export const DataContext = createContext()

function ApiContext() {
    const [wordData, setWordData] = useState([])
    const { btnVal, setBtnVal } = useContext(DataContext)
    const [category, setCategory] = useState('en')

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
            data()
        } catch (err) {

            console.log('Found some errors');
        }
    }, [LINK])

    if (!btnVal ) {
        return <StartPage/>
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
                <div className={home.container}>
                    <div className={home.word}>
                        <h1 className={home.genWord}>{genFilteredWord}</h1>
                    </div>
                    <div className={home.phonet}>
                        <p className={home.phonetGen}>{phonetic}</p>
                    </div>
                    {/* <div>
                        <audio controls>
                            <source src={audio} type='audio/mpeg' />
                        </audio>
                    </div> */}
                    <div className={home.meaning}>
                        {GetMeanings}
                    </div>
                    <div className={home.source}>
                        <div className={home.sourceFilter}>  <div className={home.fs}>{GetSource}</div> </div>
                    </div>
                </div>
            </>
        )

    } else {
        return (
            <div className={error.errWrap}>
                <p className={error.emoji}> 😦 </p>
                <p className={error.errTitle}> {wordData.title} </p>
                <p className={error.errMessage}> {wordData.message} </p>
                <p className={error.errResolution}> {wordData.resolution} </p>
            </div>
        )
    }

}

export default ApiContext
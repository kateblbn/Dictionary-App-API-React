import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext()

function ApiContext(props) {
    const [wordData, setWordData] = useState([])
    const word = 'mother'
    const LINK = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
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
        } catch (error) {
            console.log('Found some errors');
        }
    }, [LINK])
    const SendWord = { wordData }
    return (
        <>
            <DataContext.Provider value={SendWord}>{props.children}</DataContext.Provider>
        </>
    )
}

export default ApiContext
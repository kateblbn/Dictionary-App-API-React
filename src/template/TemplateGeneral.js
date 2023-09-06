import React, { useContext } from 'react'
import { DataContext } from '../api/ApiContext'
import useSynonym from '../hooks/useSynonym'
import useAntonym from '../hooks/useAntonym'

export function GetData() {
  const { wordData } = useContext(DataContext)
  const generalWord = wordData.map(el => el.word )
  const genFilteredWord = generalWord.filter( (e, i) => generalWord.indexOf(e) === i)
  // const GetSource = wordData.map(el => el.sourceUrls.map(e => e.length))
  const GetSource = wordData.map(el => {
   let c =  el.sourceUrls
return c
  } )
  console.log(GetSource);

const filteredSource = GetSource.filter( (e, i) => GetSource.indexOf(e) === i)
// console.log(filteredSource);

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
    <div>
      <h1>{genFilteredWord}</h1>
      {GetMeanings}
     <p> {filteredSource}</p>
    </div>
  )
}
export function TemplateGenWord({ generalWord }) {
  return (
    <div>
      <h1>{generalWord}</h1>
    </div>
  )
}

function TemplateDefin({ defin }) {
  return (
    <>
      <li>{defin}</li>
    </>
  )
}
function TemmplateSynAnt({ synon, anton }) {
  return (
    <>
      <div>
        {synon}
      </div>
      <div> {anton}</div>
    </>
  )
}
export function TemplateSource({ GetSource }) {
  return (
    <>
      {/* <div>Source <span>{GetSource}</span></div> */}
    </>
  )
}
function TemplateGeneral({ def, part, synonym, antonym, generalWord, GetSource }) {
  const [checkSynon] = useSynonym(synonym)
  const [checkAntonym] = useAntonym(antonym)
  return (
    <div>
      <h2>{part}</h2>
      <h3>Meaning</h3>
      <ul>
        <li>{def}</li>
      </ul>
      <div>
        <p>Synonyms:</p>
        <span> {checkSynon}</span>
      </div>
      <div>
        <p>Antonyms:</p>
        <div> {checkAntonym}</div>

      </div>
      {/* {GetSource} */}
    </div>
  )
}

export default TemplateGeneral
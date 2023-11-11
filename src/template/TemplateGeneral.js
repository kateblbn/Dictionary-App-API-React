import React, { useContext } from 'react'
import { DataContext } from '../api/ApiContext'
import useSynonym from '../hooks/useSynonym'
import useAntonym from '../hooks/useAntonym'
import mean from '../css/mean.module.css'

// export function GetData() {
//   const { wordData } = useContext(DataContext)
//   const generalWord = wordData.map(el => el.word )
//   const genFilteredWord = generalWord.filter( (e, i) => generalWord.indexOf(e) === i)
//   // const GetSource = wordData.map(el => el.sourceUrls.map(e => e.length))
//   const GetSource = wordData.map(el => {
//    let c =  el.sourceUrls
// return c
//   } )
//   // console.log(GetSource);

// const filteredSource = GetSource.filter( (e, i) => GetSource.indexOf(e) === i)
// // console.log(filteredSource);

//   const GetMeanings = wordData.map(el => {
//     const verb = el.meanings.map(elem => {
//       //noun, verb, interjection
//       const partOfSpeech = elem.partOfSpeech;
//       const definitions = elem.definitions.map(el => <TemplateDefin defin={el.definition} />)
//       const synonyms = elem.synonyms.map(el => <TemmplateSynAnt synon={el} />)
//       const antonyms = elem.antonyms.map(el => <TemmplateSynAnt anton={el} />)
//       return (
//         <>
//           <TemplateGeneral part={partOfSpeech} def={definitions} synonym={synonyms} antonym={antonyms} />
//         </>
//       )
//     })
//     return verb

//   })

//   return (
//     <div>
//       <h1>{genFilteredWord}</h1>
//       {GetMeanings}
//      <p> {filteredSource}</p>
//     </div>
//   )
// }
export function TemplateGenWord({ generalWord }) {
  return (
    <div className={mean.genWord}>
      <h1 className={mean.word}>{generalWord}</h1>
    </div>
  )
}


export function TemplateDefin({ defin }) {
  return (
    <>
      <ul className={mean.definList}>
        <li className={mean.list}>{defin}</li>
      </ul>
    </>
  )
}
export function TemmplateSynAnt({ synon, anton }) {
  return (
    <>
      <div className={mean.synon}>
        <div>{synon}</div>
      </div>
      <div className={mean.anton}> 
        <div>{anton} </div>
      </div>
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
    <div className={mean.wrapMeanings}>
      <div className={mean.flexPart}>
        <h2 className={mean.part}>{part}</h2>
        <div className={mean.line}></div>
      </div>
      <h3 className={mean.meanTitle}>Meaning</h3>
      <div className={mean.wrapDef}>
        <p className={mean.def}>{def}</p>
      </div>
      <div className={mean.wrapSynon}>
        <p className={mean.synon}>Synonyms:</p>
        <div className={mean.synonRes}> {checkSynon}</div>
      </div>
      <div className={mean.wrapAnton}>
        <p className={mean.anton}>Antonyms:</p>
        <div className={mean.antonRes}> {checkAntonym}</div>

      </div>
      {/* {GetSource} */}
    </div>
  )
}

export default TemplateGeneral
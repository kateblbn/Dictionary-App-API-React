import React from 'react'
import useSynonym from '../hooks/useSynonym'
import useAntonym from '../hooks/useAntonym'
import mean from '../css/mean.module.css'

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
    </div>
  )
}

export default TemplateGeneral
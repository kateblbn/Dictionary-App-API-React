import React from 'react'

function useSynonym(synonyms) {
  const checkSynon = (synonyms.length === 0) ? <>No one synonyms</> : synonyms;
  return [checkSynon]
}

export default useSynonym
import React from 'react'

function useAntonym(antonyms) {
    const checkAntonym = (antonyms.length === 0) ? <>No one antonyms</> : antonyms;
    return [checkAntonym]
}

export default useAntonym
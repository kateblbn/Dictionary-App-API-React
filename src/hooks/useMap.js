import React, { useContext } from 'react'
import { DataContext } from '../api/ApiContext'

function useMap() {
  const { wordData } = useContext(DataContext)
  const getData = wordData.map

  console.log(getData);
  return (
    <div>useMap</div>
  )
}

export default useMap
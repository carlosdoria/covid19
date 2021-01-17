import React, { memo, useState, useEffect, useCallback } from 'react';
import ApiCovid from '../../services/api'
import Board from './components/Board'
import Panel from './components/Panel'
import * as S from './styles'

const Main = () => {

  const [ data, setData ] =useState({})
  const [ country, setCountry ] = useState('brazil')
  // Retorna data atual do browser
  const updateAt = new Date().toLocaleString()


  const getCovidData = useCallback((country) => {
    ApiCovid.getCountry(country)
      .then( response => setData(response))
  }, [])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  useEffect(() => {

    getCovidData(country)

  }, [ getCovidData, country ])

  return (
    <S.Container>
      <div className="mb-2">
        <Panel
        data={data}
        updateAt={updateAt}
        onChange={handleChange}
        country={country}
        getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </S.Container>
  )
}

export default memo(Main)

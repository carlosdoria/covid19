import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../common/constants/countries'
import * as S from './styles'
// import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

const Panel = ({ updateAt, onChange, data, country, getCovidData }) => {

  const { cases, recovered, deaths, todayCases, todayDeaths} = data

  const TEXT = `País: ${country} - Total de casos: ${cases} - Recuperados: ${recovered}`


  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <S.ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </S.ItemStyled>
    </MenuItem>
  )

  const shareInfo = () => {
    // Navigator é a API do navegador
    navigator.share({
      title: `Dados do COVID - ${country}`,
      text: TEXT,
      url: 'https://covid19dio.netlify.app/'
    })
  }

  const copyInfo = () => {
    // Navigator é a API do navegador
    navigator.clipboard.writeText(TEXT)
  }

  const shareButton = (
    <React.Fragment>
      <Button variant='contained' color='primary' onClick={shareInfo}>
        Compartilhar
      </Button>
    </React.Fragment>

)
  const copyButton = (
    <React.Fragment>
      <Button variant='contained' color='primary' onClick={copyInfo}>
        Copiar
      </Button>
    </React.Fragment>
  )

  return (
    <Card>
      <S.CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">DADOS COVID 19</Typography>
          <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? shareButton : copyButton}
      </S.CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)

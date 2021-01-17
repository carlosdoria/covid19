import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import * as S from './styles'

const Card = ({ value, label, color }) => {
  return (
    <CardUI>
      <S.CardContentStyled color={color}>
        <S.ValueStyled>{value}</S.ValueStyled>
        <S.LabelStyled>{label}</S.LabelStyled>
      </S.CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)

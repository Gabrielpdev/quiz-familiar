import { useGameSetupStore } from '@/store'
import React from 'react'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'
import * as S from './styles'

export const Menu: React.FC = () => {
  function handleNextQuestion() {
    useGameSetupStore.setState((state) => ({
      ...state,
      isOnMenu: false
    }))
  }

  return (
    <S.Wrapper>
      <BsFillQuestionOctagonFill size={70} />
      <S.Title>
        Vamos ver o que você conhece sobre: <strong>Família Pereira</strong>
      </S.Title>
      <S.Confirm onClick={handleNextQuestion}>Começar</S.Confirm>
    </S.Wrapper>
  )
}

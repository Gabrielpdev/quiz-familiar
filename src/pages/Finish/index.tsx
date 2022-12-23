import { questions } from '@/mocks/questions'
import { useGameSetupStore } from '@/store'
import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import * as S from './styles'

export const Finish: React.FC = () => {
  const answears = useGameSetupStore((state) => state.answears)

  function handleNextQuestion() {
    useGameSetupStore.setState((state) => ({
      ...state,
      isOnMenu: true,
      answears: [],
      currentQeustion: 0
    }))
  }

  const corrects = questions.reduce((acc, question, index) => {
    if (question.correct === answears[index]) {
      return acc + 1
    }
    return acc
  }, 0)

  return (
    <S.Wrapper>
      <BsCheckCircleFill size={70} />
      <S.Title>
        Você acertou
        <br />
        {corrects} de {questions.length}
      </S.Title>
      <S.Description>E receberá {corrects * 5} Reais</S.Description>
      <S.Confirm onClick={handleNextQuestion}>Voltar</S.Confirm>
    </S.Wrapper>
  )
}

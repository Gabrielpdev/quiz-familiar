import { questions } from '@/mocks/questions'
import { useGameSetupStore } from '@/store'
import React from 'react'
import * as S from './styles'

export const Result: React.FC = () => {
  const answears = useGameSetupStore((state) => state.answears)

  function handleNextQuestion() {
    useGameSetupStore.setState((state) => ({
      ...state,
      skippedQuestions: 0,
      universitarySelected: false,
      isOnMenu: true,
      answears: [],
      currentQeustion: 0
    }))
  }

  return (
    <S.Wrapper>
      <S.Title>Resultado</S.Title>
      <S.Description>
        {questions.map((quest, index) => (
          <S.QuestWrapper key={quest.question}>
            <S.Question>{quest.question}</S.Question>
            {quest.alternatives.map((alt, altIndex) => (
              <S.Alternative
                isWrong={answears[index] !== quest.correct && answears[index] === altIndex}
                isSelected={quest.alternatives[quest.correct] === alt}
                key={alt}
              >
                {alt}
              </S.Alternative>
            ))}
          </S.QuestWrapper>
        ))}
      </S.Description>
      <S.Confirm onClick={handleNextQuestion}>INICIO</S.Confirm>
    </S.Wrapper>
  )
}

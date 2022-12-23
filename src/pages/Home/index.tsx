import { questions } from '@/mocks/questions'
import { useGameSetupStore } from '@/store'
import React, { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Finish } from '../Finish'
import { Menu } from '../Menu'
import * as S from './styles'

export const Home: React.FC = () => {
  const isOnMenu = useGameSetupStore((state) => state.isOnMenu)
  const currentQeustion = useGameSetupStore((state) => state.currentQeustion)
  const pushToAnswears = useGameSetupStore((state) => state.pushToAnswears)

  const [selectedAnswaer, setSelectedAnswaer] = useState<null | number>(null)

  function handleNextQuestion() {
    if (selectedAnswaer === null) return

    pushToAnswears(selectedAnswaer)
    useGameSetupStore.setState((state) => ({
      ...state,
      currentQeustion: currentQeustion + 1
    }))

    setSelectedAnswaer(null)
  }

  if (isOnMenu) {
    return <Menu />
  }

  if (currentQeustion + 1 > questions.length) {
    return <Finish />
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>QUIZ FAMILIA</S.Title>
        <S.CurrentQuestion>
          {currentQeustion + 1}/{questions.length}
        </S.CurrentQuestion>
      </S.Header>

      <S.Question>{questions[currentQeustion].question}</S.Question>

      <S.Body>
        {questions[currentQeustion].alternatives.map((alternative, index) => (
          <S.Alternative
            isSelected={selectedAnswaer === index}
            onClick={() => setSelectedAnswaer(index)}
            key={alternative}
          >
            <p>{alternative}</p>
            {selectedAnswaer === index ? <BsCheckCircleFill size={20} /> : <div />}
          </S.Alternative>
        ))}

        <S.Confirm disabled={selectedAnswaer === null} onClick={handleNextQuestion}>
          CONFIRMAR
        </S.Confirm>
      </S.Body>
    </S.Wrapper>
  )
}

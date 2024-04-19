import { questions } from '@/mocks/questions'
import { useGameSetupStore } from '@/store'
import React, { useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { Menu } from '../Menu'
import { Universitaries } from '../Universitaries'
import * as S from './styles'
import { Finish } from '../Finish'

export const Home: React.FC = () => {
  const isOnUnivesitry = useGameSetupStore((state) => state.isOnUnivesitry)
  const isOnMenu = useGameSetupStore((state) => state.isOnMenu)
  const skippedQuestions = useGameSetupStore((state) => state.skippedQuestions)
  const currentQeustion = useGameSetupStore((state) => state.currentQeustion)
  const universitarySelected = useGameSetupStore((state) => state.universitarySelected)
  const pushToAnswears = useGameSetupStore((state) => state.pushToAnswears)

  const [selectedAnswaer, setSelectedAnswaer] = useState<null | number>(null)

  function handleHelpQuestion() {
    useGameSetupStore.setState((state) => ({
      ...state,
      isOnUnivesitry: true
    }))
  }

  function handleSkipQuestion() {
    pushToAnswears(questions[currentQeustion].correct)

    useGameSetupStore.setState((state) => ({
      ...state,
      skippedQuestions: skippedQuestions + 1,
      currentQeustion: currentQeustion + 1
    }))

    setSelectedAnswaer(null)
  }

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

  if (isOnUnivesitry) {
    return <Universitaries />
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

      <S.Options>
        <S.ButtonHelp onClick={handleHelpQuestion} disabled={universitarySelected}>
          UNIVERSITARIOS <br />
          {universitarySelected ? 1 : 0}/ 1
        </S.ButtonHelp>

        <S.ButtonHelp onClick={handleSkipQuestion} disabled={skippedQuestions >= 1}>
          PULAR <br />
          {skippedQuestions}/ 1
        </S.ButtonHelp>
      </S.Options>

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

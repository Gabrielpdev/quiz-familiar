import { questions } from '@/mocks/questions'
import { useGameSetupStore } from '@/store'
import React, { useEffect, useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import * as S from './styles'

export const Universitaries: React.FC = () => {
  const currentQeustion = useGameSetupStore((state) => state.currentQeustion)
  const universitaries = useGameSetupStore((state) => state.universitaries)
  const getUniversitaries = useGameSetupStore((state) => state.getUniversitaries)

  const [selectedAnswaer, setSelectedAnswaer] = useState<null | number>(null)

  function handleConfirm() {
    useGameSetupStore.setState((state) => ({
      ...state,
      universitarySelected: true,
      isOnUnivesitry: false
    }))
  }

  useEffect(() => {
    getUniversitaries()
  }, [])

  console.log(universitaries)

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>QUIZ FAMILIA</S.Title>
        <S.CurrentQuestion>
          {currentQeustion + 1}/{questions.length}
        </S.CurrentQuestion>
      </S.Header>

      <S.Question>Selecione seu universitario</S.Question>

      <S.Body>
        {universitaries.map((univesitary, index) => (
          <S.Alternative
            isSelected={selectedAnswaer === index}
            onClick={() => setSelectedAnswaer(index)}
            key={univesitary}
          >
            <p>{univesitary}</p>
            {selectedAnswaer === index ? <BsCheckCircleFill size={20} /> : <div />}
          </S.Alternative>
        ))}

        <S.Confirm disabled={selectedAnswaer === null} onClick={handleConfirm}>
          CONFIRMAR
        </S.Confirm>
      </S.Body>
    </S.Wrapper>
  )
}

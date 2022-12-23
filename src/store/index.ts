import { univesitaries as mock } from '@/mocks/univesitaries'
import create from 'zustand'

import { GET_GAME_SETUP_STATE, IGameSetupStore, SET_GAME_SETUP_STATE } from './types'

export const useGameSetupStore = create<IGameSetupStore>(
  (set: SET_GAME_SETUP_STATE, get: GET_GAME_SETUP_STATE): IGameSetupStore => ({
    isOnMenu: true,
    isOnUnivesitry: false,
    universitarySelected: false,
    skippedQuestions: 0,
    currentQeustion: 0,
    answears: [],
    universitaries: [],

    getUniversitaries: () => onGetUniversitaries(set),
    pushToAnswears: (value: number) => {
      get().answears.push(value)
    }
  })
)

function onGetUniversitaries(set: SET_GAME_SETUP_STATE) {
  const selectedUniversitaries: string[] = []
  let univesitaries = mock

  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * univesitaries.length - 1)

    const universitary = univesitaries[random < 0 ? 0 : random]

    selectedUniversitaries.push(universitary)
    univesitaries = univesitaries.filter((u) => u !== universitary)
  }

  set((state) => ({
    ...state,
    universitaries: selectedUniversitaries
  }))
}

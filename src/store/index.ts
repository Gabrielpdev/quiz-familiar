import create from 'zustand'

import { GET_GAME_SETUP_STATE, IGameSetupStore, SET_GAME_SETUP_STATE } from './types'

export const useGameSetupStore = create<IGameSetupStore>(
  (set: SET_GAME_SETUP_STATE, get: GET_GAME_SETUP_STATE): IGameSetupStore => ({
    isOnMenu: true,
    currentQeustion: 0,
    answears: [],

    pushToAnswears: (value: number) => {
      get().answears.push(value)
    }
  })
)

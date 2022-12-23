import { GetState, SetState } from 'zustand'

export type SET<Type extends object> = SetState<Type>
export type GET<Type extends object> = GetState<Type>

export type SET_GAME_SETUP_STATE = SET<IGameSetupStore>
export type GET_GAME_SETUP_STATE = GET<IGameSetupStore>

export interface IGameSetupStore {
  isOnMenu: boolean
  isOnUnivesitry: boolean
  universitarySelected: boolean
  skippedQuestions: number
  currentQeustion: number
  answears: number[]
  universitaries: string[]

  getUniversitaries: () => void
  pushToAnswears: (value: number) => void
}

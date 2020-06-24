import { ITodo } from '../state/todo/types'

export type IRootStack = {
  Main: undefined
  Todo: {
    id: ITodo['id']
  }
}

export type IMainStack = {
  Lists: undefined
  Todos: undefined
}
import { ITodo } from '../state/todo/types'

export type IRootStack = {
  Main: undefined
  Todo: {
    id: ITodo['id']
    sectionIndex: number
    itemIndex: number
  }
}

export type IMainStack = {
  Lists: undefined
  Todos: undefined
}
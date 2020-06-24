//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import moment from 'moment'

import { 
  IAllTodos,
  ITodo,
  ITodoUpdates
} from '../types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITodoActions = 
  ICreateTodo | 
  IDeleteTodo |
  ISetAllTodos | 
  IUpdateTodo

//-----------------------------------------------------------------------------
// Create Todo
//-----------------------------------------------------------------------------
export const CREATE_TODO = 'CREATE_TODO'
interface ICreateTodo {
  type: typeof CREATE_TODO
  newTodo: ITodo
  sectionIndex: number
  itemIndex: number
}

export const createTodo = (
  sectionIndex: number, 
  itemIndex: number
): ITodoActions => {

  const newTodo: ITodo = {
    id: Math.random() + '',
    text: null,
    dateCreated: moment().format('YYYY_MM_DD'),
    dateCurrent: moment().format('YYYY_MM_DD'),
    dateCompleted: null
  }

  return {
    type: CREATE_TODO,
    newTodo,
    sectionIndex: sectionIndex,
    itemIndex: itemIndex + 1
  }
}

//-----------------------------------------------------------------------------
// Delete Todo
//-----------------------------------------------------------------------------
export const DELETE_TODO = 'DELETE_TODO'
interface IDeleteTodo {
  type: typeof DELETE_TODO
  id: ITodo['id']
  sectionIndex: number
}

export const deleteTodo = (
  id: string, 
  sectionIndex: number
): ITodoActions => {
  return {
    type: DELETE_TODO,
    id,
    sectionIndex
  }
}

//-----------------------------------------------------------------------------
// Set All Todos
//-----------------------------------------------------------------------------
export const SET_ALL_TODOS = 'SET_ALL_TODOS'
interface ISetAllTodos {
  type: typeof SET_ALL_TODOS
  nextAllTodos: IAllTodos
}

export const setAllTodos = (nextAllTodos: IAllTodos): ITodoActions => {
	return {
		type: SET_ALL_TODOS,
    nextAllTodos
	}
}

//-----------------------------------------------------------------------------
// Update Todo
//-----------------------------------------------------------------------------
export const UPDATE_TODO = 'UPDATE_TODO'
interface IUpdateTodo {
  type: typeof UPDATE_TODO
  id: ITodo['id']
  updates: ITodoUpdates
}

export const updateTodo = (id: ITodo['id'], updates: ITodoUpdates): ITodoActions => {
	return {
    type: UPDATE_TODO,
    id,
    updates
	}
}
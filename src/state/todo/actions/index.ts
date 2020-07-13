//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import moment from 'moment'

import { 
  IAllTodos,
  ITodo,
  ITodoUpdates
} from '../types'
import {
  ITodoState
} from '../reducers'
import { IThunkAction, IThunkDispatch } from '../../types'
import { IAppState } from '../..'
import { resolveVisibleTodos } from '../resolvers'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type ITodoActions = 
  ICreateTodo | 
  IDeleteTodo |
  ISetAllTodos | 
  ISetVisibleTodos | 
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
): IThunkAction => {
  return async (dispatch: IThunkDispatch) => {

    const newTodo: ITodo = {
      id: Math.random() + '',
      text: null,
      dateCreated: moment().format(),
      dateCurrent: moment().format(),
      dateCompleted: null
    }

    dispatch(createTodoReducer(newTodo, sectionIndex, itemIndex))
  }
}

export const createTodoReducer = (
  newTodo: ITodo,
  sectionIndex: number, 
  itemIndex: number
): ITodoActions => {
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
): IThunkAction => {
  return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    dispatch(deleteTodoReducer(id, sectionIndex))
    dispatch(setVisibleTodos(resolveVisibleTodos(getState)))
  }
}

export const deleteTodoReducer = (
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
// Set All Todos
//-----------------------------------------------------------------------------
export const SET_VISIBLE_TODOS = 'SET_VISIBLE_TODOS'
interface ISetVisibleTodos {
  type: typeof SET_VISIBLE_TODOS
  nextVisibleTodos: ITodoState['visibleTodos']
}

export const setVisibleTodos = (nextVisibleTodos: ITodoState['visibleTodos']): ITodoActions => {
	return {
		type: SET_VISIBLE_TODOS,
    nextVisibleTodos
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

export const updateTodo = (
  id: ITodo['id'], 
  updates: ITodoUpdates,
  updateVisibleTodos: boolean = false
): IThunkAction => {
  return async (dispatch: IThunkDispatch, getState: () => IAppState) => {
    dispatch(updateTodoReducer(id, updates))
    updateVisibleTodos && dispatch(setVisibleTodos(resolveVisibleTodos(getState)))
  }
}

export const updateTodoReducer = (id: ITodo['id'], updates: ITodoUpdates): ITodoActions => {
	return {
    type: UPDATE_TODO,
    id,
    updates
	}
}
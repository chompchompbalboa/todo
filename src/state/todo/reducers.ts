//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import moment from 'moment'
import { sample, times } from 'lodash'
import { loremIpsum } from 'lorem-ipsum'

import { 
  IAllTodos,
  ITodo
} from './types'
import {
  ITodoActions, 
  CREATE_TODO,
  DELETE_TODO,
  SET_ALL_TODOS,
  SET_VISIBLE_TODOS,
  UPDATE_TODO
} from './actions'

//-----------------------------------------------------------------------------
// Initial  
//-----------------------------------------------------------------------------
const getTodos = () => {
	const startDate = moment()
	const endDate = moment(startDate).add('6', 'd')
	let currentDate = startDate
	let currentSection = 0
  let visibleTodos: ITodoState['visibleTodos'] = []
  let allTodos: ITodoState['allTodos'] = {}

	while(moment(currentDate) <= moment(endDate)) {
    const newTodoIds: ITodo['id'][] = []
    times(sample([ 3, 3, 5, 5, 6 ]) as number, (n) => ({
      id: currentSection + '.' + n,
      text: loremIpsum({ 
        count: 1,
        units: "sentence",
        sentenceLowerBound: 2,
        sentenceUpperBound: 10
      }),
      dateCreated: moment(currentDate).format(),
      dateCurrent: moment(currentDate).format(),
      dateCompleted: currentSection < 3 ? moment(currentDate).format() : null
    })).forEach(newTodo => {
      newTodoIds.push(newTodo.id)
      allTodos[newTodo.id] = newTodo
    })
		visibleTodos.push({
      sectionIndex: currentSection,
			header: moment(currentDate).format('dddd MMMM Do'),
			data: newTodoIds
		})
    currentDate = currentDate.add('1', 'd')
    currentSection++
  }
	return {
    allTodos,
    visibleTodos
  }
}

const { allTodos, visibleTodos } = getTodos()

export const initialTodoState: ITodoState = {
  allTodos: allTodos,
  visibleTodos: visibleTodos
}
export type ITodoState = {
  allTodos: IAllTodos
  visibleTodos: {
    sectionIndex: number
    header: string
    data: ITodo['id'][]
  }[]
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const todosReducer = (state = initialTodoState, action: ITodoActions): ITodoState => {
	switch (action.type) {

    case CREATE_TODO: {
      const { sectionIndex, itemIndex, newTodo } = action
      const nextVisibleTodos = state.visibleTodos.map(section => {
        if(section.sectionIndex !== sectionIndex) {
          return section
        }
        return {
          ...section,
          data: [
            ...section.data.slice(0, itemIndex),
            newTodo.id,
            ...section.data.slice(itemIndex)

          ]
        }
      })

      const nextAllTodos = {
        ...state.allTodos,
        [newTodo.id]: newTodo
      }

      return {
        ...state,
        visibleTodos: nextVisibleTodos,
        allTodos: nextAllTodos
      }
    }

    case DELETE_TODO: {
      const { id, sectionIndex } = action

      const nextAllTodos: IAllTodos = {}
      Object.keys(state.allTodos).forEach(todoId => {
        if(todoId !== id) {
          nextAllTodos[todoId] = state.allTodos[todoId]
        }
      })
      const nextVisibleTodos = state.visibleTodos.map(section => {
        if(section.sectionIndex !== sectionIndex) {
          return section
        }
        return {
          ...section,
          data: section.data.filter(todoId => id !== todoId)
        }
      })

      return {
        ...state,
        allTodos: nextAllTodos,
        visibleTodos: nextVisibleTodos
      }
    }

    case SET_ALL_TODOS: {
      const { nextAllTodos } = action
      return {
        ...state,
        allTodos: nextAllTodos
      }
    }

    case SET_VISIBLE_TODOS: {
      const { nextVisibleTodos } = action
      return {
        ...state,
        visibleTodos: nextVisibleTodos
      }
    }

    case UPDATE_TODO: {
      const { id, updates } = action
      return {
        ...state,
        allTodos: {
          ...state.allTodos,
          [id]: {
            ...state.allTodos[id],
            ...updates
          }
        }
      }
    }

		default:
			return state
	}
}

export default todosReducer

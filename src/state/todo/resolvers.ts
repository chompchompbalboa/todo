//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { groupBy, orderBy } from 'lodash'
import moment from 'moment'

import { IAppState } from '..'

//-----------------------------------------------------------------------------
// Resove Visible Todos
//-----------------------------------------------------------------------------
export const resolveVisibleTodos = (getState: () => IAppState) => {
  const {
    todo: {
      allTodos
    }
  } = getState()
  const allTodosGroupedByDate = groupBy(allTodos, todo => moment(todo.dateCurrent).format('YYYY-MM-DD'))
  const nextVisibleTodos = Object.keys(allTodosGroupedByDate).sort().map((dateString, index) => {
    const header = moment(dateString).format('dddd MMMM Do')
    const sectionIndex = index
    const currentDatesTodosOrdered = orderBy(allTodosGroupedByDate[dateString], [ 'dateCompleted', 'dateCreated' ])
    const data = currentDatesTodosOrdered.map(todo => todo.id)
    return {
      header,
      sectionIndex,
      data
    }
  })
  return nextVisibleTodos
}
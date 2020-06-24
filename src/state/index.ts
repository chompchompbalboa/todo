//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { combineReducers } from 'redux'
import listsReducer from './list/reducers'
import todosReducer from './todo/reducers'

//-----------------------------------------------------------------------------
// Combine Reducers
//-----------------------------------------------------------------------------
export const appReducer = combineReducers({
  list: listsReducer,
  todo: todosReducer,
})

export type IAppState = ReturnType<typeof appReducer>

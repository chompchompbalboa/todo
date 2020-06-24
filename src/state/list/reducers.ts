//-----------------------------------------------------------------------------
// Initial
//-----------------------------------------------------------------------------
import { 
  IAllLists,
  IList
} from './types'
import {
  IListActions
} from './actions'

//-----------------------------------------------------------------------------
// Initial  
//-----------------------------------------------------------------------------
export const initialListState: IListState = {
  allLists: {},
  lists: []
}
export type IListState = {
  allLists: IAllLists
  lists: IList['id'][]
}

//-----------------------------------------------------------------------------
// Reducers
//-----------------------------------------------------------------------------
export const listsReducer = (state = initialListState, action: IListActions): IListState => {
	switch (action.type) {
		default:
			return state
	}
}

export default listsReducer

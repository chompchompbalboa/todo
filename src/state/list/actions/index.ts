//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { 
  IAllLists 
} from '../types'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IListActions = ISetAllLists

//-----------------------------------------------------------------------------
// Set All Lists
//-----------------------------------------------------------------------------
export const SET_ALL_LISTS = 'SET_ALL_LISTS'
interface ISetAllLists {
  type: typeof SET_ALL_LISTS
  nextAllLists: IAllLists
}

export const setAllLists = (nextAllLists: IAllLists): IListActions => {
	return {
		type: SET_ALL_LISTS,
    nextAllLists
	}
}
//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { IAppState } from '.'

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
export type IThunkAction = ThunkAction<Promise<void>, IAppState, {}, AnyAction>
export type IThunkDispatch = ThunkDispatch<{}, {}, AnyAction>

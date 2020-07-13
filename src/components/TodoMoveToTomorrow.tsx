//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from '../state'
import { ITodo } from '../state/todo/types'

import { 
  updateTodo 
} from '../state/todo/actions'

import TodoButton from './TodoButton'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoMoveToTomorrow = ({
  todoId
}: ITodoProps) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCurrent)

  return (
    <TodoButton
      icon={
        <EvilIcons 
          name="arrow-right" 
          size={50}
          color="rgb(150, 150, 150)"/>}
      iconText="+1 Day"
      onPress={() => {
        dispatch(updateTodo(
          todoId, 
          { dateCurrent: moment(todoDateCurrent).add('1', 'd').format()},
          true
      ))}}/>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoProps {
  todoId: ITodo['id']
}

export default TodoMoveToTomorrow

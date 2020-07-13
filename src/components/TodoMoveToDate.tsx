//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react' 
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '../state'
import { ITodo } from '../state/todo/types'

import { updateTodo } from '../state/todo/actions'

import Datepicker from './Datepicker'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoMoveToDate = ({
  todoId
}: ITodoProps) => {

  // Redux
  const dispatch = useDispatch()
  const todoDateCurrent = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCurrent)

  return (
    <Container>
      <Datepicker
        onDateChange={(nextDate: string) => dispatch(updateTodo(todoId, { dateCurrent: moment(nextDate).format()}, true))}
        value={todoDateCurrent}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoProps {
  todoId: ITodo['id']
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  margin: 10px 0;
`

export default TodoMoveToDate

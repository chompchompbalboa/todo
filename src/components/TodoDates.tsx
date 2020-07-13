//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '../state'
import { ITodo } from '../state/todo/types'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoDates = ({
  todoId
}: ITodoProps) => {

  // Redux
  const todoDateCreated = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCreated)
  const todoDateCurrent = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCurrent)
  const todoDateCompleted = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCompleted)

  return (
      <Container>
        <Date>
          <DateLabel>
            Created: 
          </DateLabel>
          <DateDate>
            {moment(todoDateCreated).format('MMMM Do, YYYY')}
          </DateDate>
        </Date>
        <Date>
          <DateLabel>
            Scheduled: 
          </DateLabel>
          <DateDate>
            {moment(todoDateCurrent).format('MMMM Do, YYYY')}
          </DateDate>
        </Date>
        <Date>
          <DateLabel>
            Completed: 
          </DateLabel>
          <DateDate>
            {todoDateCompleted 
              ? moment(todoDateCompleted).format('MMMM Do, YYYY')
              : '-'
            }
          </DateDate>
        </Date>
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

const Date = styled.View`
  margin: 1px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const DateLabel = styled.Text`
  font-size: 19px;
  font-weight: bold;
`
const DateDate = styled.Text`
  font-size: 19px;
`

export default TodoDates

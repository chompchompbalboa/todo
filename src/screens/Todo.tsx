//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { ITodo } from '../state/todo/types'

import TodoMoveToDate from '../components/TodoMoveToDate'
import TodoText from './TodoText'
import TodoDates from '../components/TodoDates'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoScreen = ({ 
  route: {
    params: {
      id
}}}: ITodoProps) => {

  return (
      <Container
      keyboardVerticalOffset={500}>
        <Header>
          <SwipeIndicator />
        </Header>
        <TodoContainer>
          <TodoText
            todoId={id}/>
          <TodoMoveToDate
            todoId={id}/>
          <TodoDates
            todoId={id}/>
        </TodoContainer>
      </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoProps {
  route: {
    params: {
      id: ITodo['id']
      sectionIndex: number
      itemIndex: number
    }
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.KeyboardAvoidingView`
  height: 75%;
  top: 25%;
  padding: 0 20px;
  background-color: rgb(230, 230, 230);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 3px 5px 10px rgb(0, 0, 0);
`

const Header = styled.View`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
`

const SwipeIndicator = styled.View`
  width: 50%;
  height: 5px;
  background-color: rgb(210, 210, 210);
  border-radius: 5px;
`

const TodoContainer = styled.View`
  flex: 1;
  padding-top: 10px;
`

export default TodoScreen

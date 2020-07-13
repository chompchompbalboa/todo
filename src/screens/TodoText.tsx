//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '../state'
import { ITodo } from '../state/todo/types'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoScreen = ({
  todoId
}: ITodoProps) => {

  // Redux
  const todoText = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.text)

  return (
    <Text>
      {todoText}
    </Text>
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
const Text = styled.Text`
  font-family: OpenSans_700Bold;
  font-size: 24px;
  text-align: center;
`

export default TodoScreen

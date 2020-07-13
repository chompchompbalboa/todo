//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

import { ITodo } from '../state/todo/types'

import TodosTodoActions from './TodosTodoActions'
import TodosTodoCheckbox from './TodosTodoCheckbox'
import TodosTodoText from './TodosTodoText'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Todo = ({ 
  id, 
  sectionIndex,
  itemIndex
}: IProps) => {

  return (
      <TodoContainer>
        <TodosTodoCheckbox
          todoId={id}/>
        <TodosTodoText
          todoId={id}
          sectionIndex={sectionIndex}
          itemIndex={itemIndex}/>
        <TodosTodoActions
          todoId={id}
          sectionIndex={sectionIndex}
          itemIndex={itemIndex}/>
      </TodoContainer>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IProps {
  id: ITodo['id']
  sectionIndex: number
  itemIndex: number
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const TodoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`

export default Todo

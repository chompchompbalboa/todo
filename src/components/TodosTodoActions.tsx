//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from 'styled-components/native'

import { ITodo } from '../state/todo/types'
import { IRootStack } from '../types/navigation'

import { Ionicons } from '@expo/vector-icons'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodosTodoActions = ({ 
  todoId,
  sectionIndex,
  itemIndex
}: IProps) => {

  // Navigation
	const navigation = useNavigation() as StackNavigationProp<IRootStack>

  return (
    <Container>
      <OpenTodoTouchable
        onPress={() => navigation.navigate('Todo', { 
          id: todoId, 
          sectionIndex: sectionIndex, 
          itemIndex: itemIndex
        })}>
        <OpenTodo>
          <IconContainer>
            <Ionicons 
              name="ios-more" 
              size={24} 
              color="rgb(150, 150, 150)" />
          </IconContainer>
        </OpenTodo>
      </OpenTodoTouchable>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IProps {
  todoId: ITodo['id']
  sectionIndex: number
  itemIndex: number
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View``

const OpenTodoTouchable = styled.TouchableWithoutFeedback``
const OpenTodo = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const IconContainer = styled.View`
  margin-left: 10px;
`

export default TodosTodoActions

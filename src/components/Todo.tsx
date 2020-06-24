//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'
import styled from 'styled-components/native'

import { IAppState } from '../state'
import { ITodo } from '../state/todo/types'
import { IRootStack } from '../types/navigation'

import { 
  createTodo, 
  deleteTodo,
  updateTodo 
} from '../state/todo/actions'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Todo = ({ 
  id, 
  sectionIndex,
  itemIndex,
  navigation 
}: IProps) => {

  // Redux
  const dispatch = useDispatch()
  const todo = useSelector((state: IAppState) => state.todo.allTodos[id])

  // State
  const [ textInputValue, setTextInputValue ] = useState(null as string | null)

  const isTodoCompleted = todo.dateCompleted !== null

  return (
    <>
      <TodoContainer>
        <Checkbox
          isCompleted={isTodoCompleted}
          onPress={() => dispatch(updateTodo(id, { dateCompleted: todo.dateCompleted ? null : moment().format('YYYY_MM_DD') }))}/>
        {todo.text 
          ? <Text
              isCompleted={isTodoCompleted}
              onPress={() => navigation.navigate('Todo', { id: todo.id })}>
              {todo.text}
            </Text>
          : <TextInput
              autoFocus
              blurOnSubmit={false}
              onBlur={() => {
                if(textInputValue) {
                  dispatch(updateTodo(id, { text: textInputValue }))
                }
                else {
                  dispatch(deleteTodo(id, sectionIndex))
                }
              }}
              onChangeText={(nextValue: string) => setTextInputValue(nextValue)}
              onKeyPress={(e: any) => {
                if([null, ''].includes(textInputValue) && e.nativeEvent.key === 'Backspace') {
                  dispatch(deleteTodo(id, sectionIndex))
                }
              }}
              onSubmitEditing={() => {
                if(textInputValue) {
                  dispatch(createTodo(sectionIndex, itemIndex))
                  setTimeout(() => {
                    dispatch(updateTodo(id, { text: textInputValue }))
                  }, 100)
                }
                else {
                  dispatch(deleteTodo(id, sectionIndex))
                }
              }}/>
        }
      </TodoContainer>
      <CreateTodoContainer 
        onPress={() => dispatch(createTodo(sectionIndex, itemIndex))}/>
    </>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IProps {
  id: ITodo['id']
  sectionIndex: number
  itemIndex: number
	navigation: StackNavigationProp<IRootStack>
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const TodoContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
padding: 13px;
border-radius: 10px;
background-color: white;
overflow: hidden;
`

const CreateTodoContainer = styled.TouchableOpacity`
  width: 100%;
  height: 12px;
  background-color: rgb(220, 220, 220);
`

const Checkbox = styled(TouchableWithoutFeedback)`
width: 30px;
height: 30px;
border-radius: 30px;
border: 1px solid
  ${({ isCompleted }) => (isCompleted ? 'rgb(0, 150, 0)' : 'rgb(100, 100, 100)')};
background-color: ${({ isCompleted }) =>
  isCompleted ? 'rgb(0, 150, 0)' : 'transparent'};
`

const Text = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 17px;
  font-family: OpenSans_400Regular;
  color: ${({ isCompleted }) => isCompleted ? 'rgb(100, 100, 100)' : 'rgb(0, 0, 0)'};
`

const TextInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-size: 17px;
  font-family: OpenSans_400Regular;
`

export default Todo

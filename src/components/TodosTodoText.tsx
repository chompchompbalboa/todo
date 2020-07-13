//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '../state'
import { ITodo } from '../state/todo/types'

import { 
  createTodo, 
  deleteTodo,
  updateTodo 
} from '../state/todo/actions'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodosTodoText = ({ 
  todoId, 
  sectionIndex,
  itemIndex
}: IProps) => {

  // Redux
  const dispatch = useDispatch()
  const todoText = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.text)
  const todoDateCompleted = useSelector((state: IAppState) => state.todo.allTodos[todoId]?.dateCompleted)

  // State
  const [ textInputValue, setTextInputValue ] = useState(todoText as string | null)

  // Update textInputValue as needed
  useEffect(() => {
    setTextInputValue(todoText)
  }, [ todoText ])

  const isTodoCompleted = todoDateCompleted !== null

  return (
    <TextInput
      autoFocus={textInputValue === null}
      blurOnSubmit
      editable={!isTodoCompleted}
      isTodoCompleted={isTodoCompleted}
      multiline
      onBlur={() => {
        if(textInputValue) {
          dispatch(updateTodo(todoId, { text: textInputValue }))
        }
        else {
          dispatch(deleteTodo(todoId, sectionIndex))
        }
      }}
      onChangeText={(nextValue: string) => setTextInputValue(nextValue)}
      onKeyPress={(e: any) => {
        if([null, ''].includes(textInputValue) && e.nativeEvent.key === 'Backspace') {
          dispatch(deleteTodo(todoId, sectionIndex))
        }
      }}
      onSubmitEditing={() => {
        if(textInputValue) {
          dispatch(createTodo(sectionIndex, itemIndex))
          setTimeout(() => {
            dispatch(updateTodo(todoId, { text: textInputValue }))
          }, 100)
        }
        else {
          dispatch(deleteTodo(todoId, sectionIndex))
        }
      }}
      scrollEnabled={false}
      value={textInputValue}/>
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
const TextInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  padding-top: 0;
  font-size: 19px;
  font-family: OpenSans_400Regular;
  color: ${({ isTodoCompleted }) => isTodoCompleted ? 'rgb(150, 150, 150)' : 'rgb(0, 0, 0)'};
`

export default TodosTodoText

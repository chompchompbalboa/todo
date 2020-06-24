//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { IAppState } from '../state'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Todo = ({ route }: ITodo) => {

  const todo = useSelector((state: IAppState) => state.todo.allTodos[route.params?.id])

  return (
      <Container>
        <Header>
          <SwipeIndicator />
        </Header>
        <TodoContainer>
          <Text>{todo.text}</Text>
        </TodoContainer>
      </Container>
  );
}

interface ITodo {
  route: any
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  height: 85%;
  top: 15%;
  padding: 0 20px;
  background-color: rgb(230, 230, 230);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 3px 5px 10px rgb(0, 0, 0);
`

const Header = styled.View`
  width: 100%;
  padding: 15px 0;
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

const Text = styled.Text`
  font-family: OpenSans_700Bold;
  font-size: 22px;
`

export default Todo

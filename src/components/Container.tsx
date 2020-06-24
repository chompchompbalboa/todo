//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ContainerExport = ({ children }: IContainerExport) => {
  return (
      <Container>
        <Header>
          <Text>All Tasks</Text>
        </Header>
        <Children>
          { children }
        </Children>
      </Container>
  );
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface IContainerExport {
  children?: any
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  flex: 1;
  background-color: rgb(220, 220, 220);
`

const Header = styled.View`
  width: 100%;
  height: 75px;
  padding-left: 22px;
  padding-bottom: 2px;
  justify-content: flex-end;
  align-items: flex-start;
`

const Text = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: bold;
`

const Children = styled.KeyboardAvoidingView`
  flex: 1;
`

export default ContainerExport

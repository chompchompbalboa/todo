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
  background-color: rgb(230, 230, 230);
`

const Header = styled.View`
  width: 100%;
  height: 75px;
  padding-left: 15px;
  justify-content: flex-end;
  align-items: flex-start;
`

const Text = styled.Text`
  color: black;
  font-size: 28px;
  font-weight: bold;
`

const Children = styled.View`
  flex: 1;
`

export default ContainerExport

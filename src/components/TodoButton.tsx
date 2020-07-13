//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodoButton = ({
  icon,
  iconText,
  onPress
}: ITodoProps) => {

  return (
    <Touchable
      onPress={onPress}>
      <View>
        <IconContainer>
          {icon}
        </IconContainer>
        <Text>
          {iconText}
        </Text>
      </View>
    </Touchable>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodoProps {
  icon: any // React Component
  iconText: string
  onPress(...args: any): void
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Touchable = styled.TouchableWithoutFeedback`
`

const View = styled.View`
  margin: 0 5px;
  padding: 10px;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgb(150, 150, 150);
  background-color: white;
`
const Text = styled.Text`
  font-size: 18px;
  color: rgb(100, 100, 100);
`

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`

export default TodoButton

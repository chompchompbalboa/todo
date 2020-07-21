//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import React from 'react'
import Svg, { Path } from 'react-native-svg'

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const Icon = ({ 
  icon, 
  size = '200'
}: IconProps) => {

  return (
    <Svg
      width={size}
      height={size}
      color="red"
    >
      <Path
        d={icon}
        stroke="currentColor"
        strokeWidth="32"/>
    </Svg>
  )
}

//------------------------------------------------------------------------------
// Props
//------------------------------------------------------------------------------
export type IconProps = {
  icon: string
  size?: string
}

export default Icon
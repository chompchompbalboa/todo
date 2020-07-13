//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold
} from '@expo-google-fonts/dev'

import {
  IRootStack
} from './types/navigation'
import { appReducer, IAppState } from './state'

import Lists from './screens/Lists'
import Todos from './screens/Todos'
import Todo from './screens/Todo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const { Navigator: RootNavigator, Screen: RootScreen } = createStackNavigator<IRootStack>()
const { Navigator: MainNavigator, Screen: MainScreen } = createStackNavigator()

const App = () => {

  const [ fontsLoaded ] = useFonts({ OpenSans_400Regular, OpenSans_700Bold })

  const store = createStore(appReducer, applyMiddleware(thunkMiddleware as ThunkMiddleware<IAppState>))

  if(fontsLoaded) {
    return (
      <ReduxProvider store={store}>
        <NavigationContainer>
          <RootNavigator
            initialRouteName="Main"
            mode="modal"
            screenOptions={{ 
              headerShown: false,
              cardOverlayEnabled: true,
              cardStyle: {
                backgroundColor: 'transparent'
              },
              gestureResponseDistance: {
                vertical: 600
              }
            }}>
            <RootScreen
              name="Main"
              component={MainStackScreen}/>
            <RootScreen
              name="Todo"
              component={Todo}/>
          </RootNavigator>
        </NavigationContainer>
      </ReduxProvider>
    )
  }
  return null
}

const MainStackScreen = () => (
  <MainNavigator
    initialRouteName="Todos"
    screenOptions={{ headerShown: false }}>
    <MainScreen
      name="Lists"
      component={Lists}/>
    <MainScreen
      name="Todos"
      component={Todos}/>
  </MainNavigator>
)

export default App

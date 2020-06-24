//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { KeyboardAwareSectionList } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { IAppState } from '../state'
import { ITodo } from '../state/todo/types'

import Container from '../components/Container'
import Todo from '../components/Todo'
import { StackNavigationProp } from '@react-navigation/stack'
import { IRootStack } from '../types/navigation'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Todos = () => {

	const todosList = useRef(null)

	const visibleTodos = useSelector((state: IAppState) => state.todo.visibleTodos)

	const navigation = useNavigation() as StackNavigationProp<IRootStack>

	const renderItem = ({
			index,
			item,
			section
		}: { 
			index: number
			item: ITodo['id'] 
			section: ISection
		}) => {
		return (
			<Todo 
				id={item}
				sectionIndex={section.sectionIndex}
				itemIndex={index}
				navigation={navigation}/>
		)
	}

	return (
		<Container>
			<TodosList
				ref={todosList}
				extraHeight={150}
				keyboardOpeningTime={50}
				stickySectionHeadersEnabled
				sections={visibleTodos}
				ListFooterComponent={() => <Footer />}
				renderItem={renderItem}
				renderSectionHeader={({ section }: IRenderSectionHeader) => <Header>{section.header}</Header>}
				keyExtractor={(item: ITodo['id']) => item}
			/>
		</Container>
	)
}
//-----------------------------------------------------------------------------
// Types
//-----------------------------------------------------------------------------
interface IRenderSectionHeader {
  section: ISection
}
interface ISection {
	header: string
	data: ITodo['id'][]
	sectionIndex: number
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const TodosList = styled(KeyboardAwareSectionList)`
	width: 100%;
	padding: 0 12px;
	flex: 1;
`

const Header = styled.Text`
	width: 100%;
	padding: 5px 10px;
	font-family: OpenSans_700Bold;
	font-size: 22px;
	background-color: rgba(220, 220, 220, 1);
`

const Footer = styled.View`
  width: 100%;
  height: 100px;
`

export default Todos

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardAwareSectionList } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components/native'

import { IAppState } from '../state'
import { ITodo } from '../state/todo/types'

import { createTodo } from '../state/todo/actions'

import Container from '../components/Container'
import TodosTodo from '../components/TodosTodo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Todos = () => {

	const todosList = useRef(null)

	const dispatch = useDispatch()
	const visibleTodos = useSelector((state: IAppState) => state.todo.visibleTodos)
	const visibleTodoLength = useSelector((state: IAppState) => state.todo.visibleTodos.length)
	const visibleTodoDataLength = useSelector((state: IAppState) => state.todo.visibleTodos[visibleTodoLength - 1].data.length)

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
			<TodosTodo 
				id={item}
				sectionIndex={section.sectionIndex}
				itemIndex={index}/>
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
				ListFooterComponent={() => 
					<CreateTodo
						onPress={() => dispatch(createTodo(visibleTodoLength - 1, visibleTodoDataLength - 1))}>
						<Footer />
					</CreateTodo>
				}
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
	padding: 0 15px;
`

const Header = styled.Text`
	width: 100%;
	padding: 5px 0;
	font-family: OpenSans_700Bold;
	font-size: 24px;
	background-color: rgb(230, 230, 230);
`

const CreateTodo = styled.TouchableHighlight`
  width: 100%;
	height: 250px;
`

const Footer = styled.View``

export default Todos

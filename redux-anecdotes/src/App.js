import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = ({notification, initializeAnecdotes}) => {

	useEffect( () => {
		initializeAnecdotes()
	}, [initializeAnecdotes])

	return (
		<div>
			<h2>Anecdotes</h2>
			{ notification !== '' && <Notification />}
			<Filter />
			<AnecdoteList />
			<AnecdoteForm />
		</div>
	)
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}

const mapDispatchToProps = {
	initializeAnecdotes
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
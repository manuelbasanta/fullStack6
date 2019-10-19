import anecdotesService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
	switch(action.type) {
		case 'VOTE':
			const anecdoteToVote = state.find(el => el.id === action.id)
			const changedAnecdote = {
				...anecdoteToVote, 
				votes: anecdoteToVote.votes + 1
			}
			return state.map(el => el.id === action.id ? changedAnecdote : el)
		case 'INIT_ANECDOTES':
			return action.data
		case 'NEW_ANECDOTE':
			return [...state, action.data]
		default:
			return state
	}
}

export const addVote = anecdote => {
	return async dispath => {
		const response = await anecdotesService.voteAnecdote(anecdote)
		dispath({
			type: 'VOTE',
			id: response.id
		})
	}
}

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdotesService.getAll()
		dispatch({
			type: 'INIT_ANECDOTES',
			data : anecdotes
		})
	}
}

export const createAnecdote = content => {
	return async dispatch => {
		const anecdote = await anecdotesService.addAnecdote(content)
		dispatch({
			type: 'NEW_ANECDOTE',
			data: anecdote
		})
	}
}

export default anecdoteReducer
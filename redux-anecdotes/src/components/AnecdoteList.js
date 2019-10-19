import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({anecdotes, setNotification, addVote}) => {

	const vote = anecdote => {
        addVote(anecdote)
        setNotification(`You've voted '${anecdote.content}'`, 3)
    }
    
    
    return (
        <div>
            {
                anecdotes
                    .map(anecdote =>
                        <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                        </div>
                    )
            }
        </div>
    )
}

const filterAnecdotes = (anecdotes, filter) => {
    return anecdotes
        .filter(anecdote => {
            return anecdote.content.toLowerCase()
                .indexOf(filter.toLowerCase()) !== -1
        })
        .sort((a, b) =>  b.votes - a.votes)
}

const mapStateToProps = (state) => {
    return {
        anecdotes: filterAnecdotes(state.anecdotes, state.filter)
    }
}

const mapDispatchToProps = {
    setNotification,
    addVote
}

const ConnectedAnecdoteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
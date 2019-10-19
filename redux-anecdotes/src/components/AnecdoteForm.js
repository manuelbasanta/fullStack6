import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({createAnecdote, setNotification}) => {
    const [anecdote, setAnecdote] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        if(anecdote !== '') {
            createAnecdote(anecdote)
            setNotification(`You've created '${anecdote}'`, 3)
        } 
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <input value={anecdote} onChange={event => setAnecdote(event.target.value)}/>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification
}

const connectedAnecdoteForm = connect(
    null,
    mapDispatchToProps
) (AnecdoteForm)

export default connectedAnecdoteForm
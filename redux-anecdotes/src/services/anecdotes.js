import axios from 'axios'

const BASE_URL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(BASE_URL);
    return response.data
}

const addAnecdote = async content => {

    const object = {
        content,
        votes: 0
    }
    
    const response = await axios.post(BASE_URL, object)
    return response.data
}

const voteAnecdote = async anecdote => {
    const response = await axios.put(`${BASE_URL}/${anecdote.id}`, {...anecdote, votes: anecdote.votes + 1})
    return response.data
}

export default {
    getAll,
    addAnecdote,
    voteAnecdote
}
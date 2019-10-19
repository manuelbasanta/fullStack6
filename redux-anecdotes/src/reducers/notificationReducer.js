const initialState = ''

const notificationReducer = (state = initialState, action) => {

    switch(action.type){
        case 'SET_NOTIFICATION':
            return action.notification
        case 'REMOVE_NOTIFICATION':
            return ''
        default:
            return state
    }
}


export const setNotification = (notification, timeoout) => {
	return async dispath => {
		dispath({
            type: 'SET_NOTIFICATION',
            notification
        })
        setTimeout( () => dispath(removeNotification()), timeoout * 1000)
	}
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer
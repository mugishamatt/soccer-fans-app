

const initialState = {
    playerList: [],
    currentPlayer : {},
    showPlayerDetails:false

}

function PlayersReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_PLAYER_LIST":
            return Object.assign({}, state, {
                playerList: action.payload ||[]

            })

        case "UPDATE_PLAYER_CURRENT":
            return Object.assign({}, state, {
                currentPlayer: action.payload || {}

            })
        case "TOGGLE_SHOWDET":
            return Object.assign({}, state, {
                showPlayerDetails: action.payload 

            })

        default:
            return state
    }

}
export default PlayersReducer;
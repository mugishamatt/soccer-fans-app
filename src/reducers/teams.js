
import { leagueActions } from '../Actions/actionTypes';

const initialState = {
    teamList: [],

}

function LeagueReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_TEAM_LIST":
            return Object.assign({}, state, {
                teamList: action.payload

            })

        default:
            return state
    }

}
export default LeagueReducer;
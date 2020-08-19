
import { leagueActions } from '../Actions/actionTypes';

const initialState={
    data:[],
    isloading:false,
    showTeams:false
}

function LeagueReducer (state=initialState,action){
    switch(action.type){
        case leagueActions.fetchLeagueData:
            return Object.assign({},state,{
                data:action.payload

            })
        case "TOGGLE_SHOW_TEAMS":
            return Object.assign({},state,{
                showTeams:action.payload
            })
            default:
            return state
    }

}
export default LeagueReducer;
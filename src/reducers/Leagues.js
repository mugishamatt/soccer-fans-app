
import { leagueActions } from '../Actions/actionTypes';

const initialState={
    data:[],
    isloading:false
}

function LeagueReducer (state=initialState,action){
    switch(action.type){
        case leagueActions.fetchLeagueData:
            return Object.assign({},state,{
                data:action.payload

            })
            default:
            return state
    }

}
export default LeagueReducer;
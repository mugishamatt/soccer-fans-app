import {combineReducers} from 'redux'

import LeagueReducer from "./Leagues"
import teamsReducer from './teams'
import playerReducer from './players'

const routeReducer = combineReducers({
    League:LeagueReducer,
    teams:teamsReducer,
    players:playerReducer
})
export default routeReducer;
import {combineReducers} from 'redux'

import LeagueReducer from "./Leagues"

const routeReducer = combineReducers({
    League:LeagueReducer,
})
export default routeReducer;
import {combinerReducers} from 'redux'

import LeagueReducer from "./Leagues"

const routeReducer = combinerReducers({
    League:LeagueReducer,
})
export default routeReducer;

import React from 'react'
import axios from 'axios'
//import cart action constants 
import {leagueActions} from './actionTypes'
import {Redirect} from 'react-router-dom';

export const fetchLeagueList = async (url,dispatch)=>{
    //all logics to extract data u want
  try {
    let response  = await axios.get(url);

    if(response.status===200){
        let leagueList = response.data && response.data.leagues || [];
       console.log(leagueList)
        //filtering all data retrieved from api 
        // let leagues = leagueList.filter(item=>item.title && item.title.indexOf("Chelsea")!=-1|| item & item.date>new Date()); 
        let action = {type:leagueActions.fetchLeagueData,payload:leagueList};
        //disptach action to the reducer
        console.log(dispatch)
        dispatch(action);
    }else{
        throw  new Error("Invalid response")
    }
  } catch (error) {
      console.error("api Call failed",error)
  }

}
export const deleteCartItem =  (url,cartgId)=>{
    axios.post(url,{
        data:cartgId
    })
}


export const fetchTeamBYLeague = async (leagueId, dispatch) => {
    let url = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=" + leagueId;
    try {
        let response = await axios.get(url);
        console.log("Team list", response)
        if (response.status == 200) {
            dispatch({ type: "TOGGLE_SHOW_TEAMS", payload: true })
            dispatch({ type: "UPDATE_TEAM_LIST", payload: response.data && response.data.teams || [] })
        } else {
            throw new Error();
        }

        // return <Redirect  to="/Teams/" />
        //  window.location="/Teams"

    } catch (error) {
        console.error(error)
    }
}


export const searchPlayers = async (playerName, dispatch) => {
    let url = "https://apiv2.apifootball.com/?action=get_players&player_name=" + playerName + "&APIkey=caefacad33f09402d7ea085041bb42e193d5bc06a5935e64039f1f7c16fd5814"
    try {
        let response = await axios.get(url);
        console.log(response)
        if (response.status == 200) {
            
            //set a list of players ( in player reducer)
            dispatch({ type: "UPDATE_PLAYER_LIST", payload: response.data && response.data || [] })
            //hide player details component when user clicks on search ( in player reducer)
            dispatch({type:"TOGGLE_SHOWDET",payload:false})
            //reset current player when user clicks on search ( in player reducer)
            dispatch({type:"UPDATE_PLAYER_CURRENT",payload:{}})
        }

        else
            throw new Error();

        // return <Redirect  to="/Teams/" />
        //  window.location="/Teams"

    } catch (error) {
        console.error(error)
    }
}




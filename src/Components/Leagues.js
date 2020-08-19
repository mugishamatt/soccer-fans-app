import React from 'react';
import {fetchTeamBYLeague} from "../Actions/Lgactions"
import Teams from './Teams'


const handleClick = (e,league,dispatch)=>{
  
    league.idLeague && fetchTeamBYLeague(league.idLeague,dispatch);
}


function League({leagueList,dispatch,showTeams}) {
 
     let filterList = leagueList.filter(item=>item.strSport=='Soccer').slice(0,21)
     console.log(filterList)
  return (
      <React.Fragment>
      
          <div >
              {filterList && filterList.length && filterList.map((item, index) => {
                  return (
                      <div key={index} onClick={e => handleClick(e, item, dispatch)}>
                          <h2>Name:</h2>
                          {item.strLeague}
                      </div>
                  )
              })
              }
          </div>
          </React.Fragment>

  );
}

export default League;
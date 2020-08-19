import React from 'react';


const Teams =()=>{
        return (  
            <div>
                  {this.props.teamList && this.props.teamList.map(team=>{
                       return(<h1>Team Name: {team.strTeam}</h1> )
                   })}
            </div>
        );
    }

 
export default Teams;

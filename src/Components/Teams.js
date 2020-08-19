import React from 'react';
import { render } from '@testing-library/react';

class Teams extends React.Component {

     render(){
        return (  
            <div>
                  {this.props.teamList && this.props.teamList.map(team=>{
                       return(<h1>Team Name: {team.strTeam}</h1> )
                   })}
            </div>
        );
    }
}
 
export default Teams;


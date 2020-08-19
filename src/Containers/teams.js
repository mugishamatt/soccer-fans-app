
import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import TeamComponent from '../Components/Teams'



class Teams extends Component {
    constructor(props) {
        super(props);
    }
    render(){ 
        return ( 
            <Fragment>
             <TeamComponent showTeams={this.props.showTeams} teamList={this.props.teamList} dispatch={this.props.dispatch}/>
            </Fragment>
         );
    }
}

const mapPropsToState = (state)=>{
    return{
        teamList:state.teams && state.teams.teamList ||[],
        showTeams:state.League && state.League.showTeams || false
    }
} 
 
export default connect(mapPropsToState)(Teams)
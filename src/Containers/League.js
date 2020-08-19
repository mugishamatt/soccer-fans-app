
import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import LeagueComponent from '../Components/Leagues'
import {fetchLeagueList} from '../Actions/Lgactions'
import TeamsComponent from '../Containers/teams';


class League extends Component {
    constructor(props) {
        super(props);
      this.toggleShowTeams = this.toggleShowTeams.bind(this)
    } 
    
    componentDidMount(){
         fetchLeagueList("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php",this.props.dispatch);
        console.log(fetchLeagueList)
        
    }
   
    toggleShowTeams = (e,dispatch)=>{
        dispatch({type:'TOGGLE_SHOW_TEAMS',payload:false})
    }
    
    render() { 
        let disp = this.props.dispatch
        return ( 
            <Fragment>
                {this.props.showTeams && <button onClick={e=>this.toggleShowTeams(e,disp)}>Back</button>}
                {this.props.showTeams ?
                    <TeamsComponent /> :
                    <LeagueComponent showTeams={this.props.showTeams} leagueList={this.props.LeagueList} dispatch={this.props.dispatch} />
                }
            </Fragment>
         );
    }
}

const mapPropsToState = (state)=>{
    return{
        LeagueList:state.League && state.League.data ||[],
        showTeams:state.League && state.League.showTeams || false
    }
} 
 
export default connect(mapPropsToState)(League)
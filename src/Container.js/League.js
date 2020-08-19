
import React, { Component,Fragment } from 'react';

import LeagueComponent from '../Components/Cart'



class League extends Component {
    constructor(props) {
        super(props);
     
    } componentDidMount(){
        fetcLeagueList("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php",this.props.dispatch);
        console.log(fetcLeagueList)
        console.log("here")
    }
    componentDidUpdate(){
        console.log("Update")
    }
    render() { 
        return ( 
            <Fragment>
             <LeagueComponent LeagueList={this.props.LeagueList} dispatch={this.props.dispatch}/>
            </Fragment>
         );
    }
}
 
export default League;
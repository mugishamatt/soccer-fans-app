
import React, { Component,Fragment } from 'react';

import LeagueComponent from '../Components/Cart'



class League extends Component {
    constructor(props) {
        super(props);
     
    } componentDidMount(){
        fetcLeagueList("https://www.scorebat.com/video-api/v1/",this.props.dispatch);
        console.log(fetcLeagueList)
        console.log("here")
    }
// https://www.scorebat.com/video-api/v1/
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
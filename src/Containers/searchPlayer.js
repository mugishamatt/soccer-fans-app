
import React, { Component } from 'react';
import PlayerList from '../Components/playerList'
import { connect } from 'react-redux';
import {searchPlayers}  from '../Actions/Lgactions'
import PlayerDetails from '../Components/playerDetails'

class SearchPlayer extends Component {
    constructor(props) {
        super(props);
        this.state =
            { playerName: '' };
        this.mySubmitHandler = this.mySubmitHandler.bind(this)
    }

    mySubmitHandler = (event, dispatch) => {
        event.preventDefault();
        this.state.playerName && this.state.playerName.length >= 4 && searchPlayers(this.state.playerName, dispatch)
    }
    myChangeHandler = (event) => {
        this.setState({ playerName: event.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={e => this.mySubmitHandler(e, this.props.dispatch)}>
                    <p>enter a Player Name:</p>
                    <input
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                    <input
                        type='submit' value='Search'
                    />
                </form>
                {/* if showPlayerDetails is true we display player detaisl Component else we render playerList */}
                {this.props.showPlayerDetails ?
                    <PlayerDetails player={this.props.currentPlayer} /> :
                    <PlayerList playerList={this.props.playerList} dispatch={this.props.dispatch} />
                }
            </React.Fragment>
        );
    }
}


const mapPropsToState = (state)=>{
    return{
        playerList:state.players && state.players.playerList ||[],
        currentPlayer:state.players && state.players.currentPlayer ||{},
        showPlayerDetails: state.players && state.players.showPlayerDetails || false,
    }
} 


export default connect(mapPropsToState)(SearchPlayer)
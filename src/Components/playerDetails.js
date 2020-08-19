import React from 'react'

const PlayerDetails = ({ player }) => {
    return (
        <React.Fragment>
            {/* split divide a string into an array, then we use the first element at index zero */}
            <h1>{player.player_name && player.player_name.split(" ")[0] || 'Player'}'s Information</h1>
            <hr />
            <h3>Player name: </h3> {player.player_name}
            <h3>AGE: </h3>{player.player_age}
            <h3>Current Team: </h3> {player.team_name}
        </React.Fragment>
    )
}

export default PlayerDetails;
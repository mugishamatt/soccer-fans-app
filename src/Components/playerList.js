import React from 'react'

//invoked on list (playerList) item click
const showPlayerDetails = (e, player, dispatch) => {
  //to update player reducer...
  dispatch({ type: "TOGGLE_SHOWDET", payload: true })
  dispatch({ type: "UPDATE_PLAYER_CURRENT", payload: player })
}
const PlayerList = ({ playerList, dispatch }) => {
  return (
    <React.Fragment>
      <h1>Search Results: </h1>
      <hr />
      <div>
        {playerList.map((player, index) => {
          return (<h4 onClick={e => showPlayerDetails(e, player, dispatch)} key={index}>{player.player_name}</h4>)
        })}
      </div>
    </React.Fragment>
  )
}

export default PlayerList
import React from 'react';


function League({leagueList}) {
  return (
    <div >
     {leagueList && leagueList.length && leagueList.map((item,index)=>{
       return(
         <div>
           <h2>Name:</h2>
           {item.title}
           </div>
       )
     })
    }
    
    </div>
  );
}

export default League;
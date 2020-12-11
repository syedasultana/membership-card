import React from 'react';

function PointsBalance({points, setPointsMoney}) {

    return (
        <div class="pointsBalance">
            <h2>Points Balance: {points}</h2>
            <h3>which is equal to £{pointsToMoney(points, setPointsMoney)}</h3>

        </div>
    )
        
   
    
  
}

function pointsToMoney(points, setPointsMoney) {
    setPointsMoney((points * 2) - (points / 4));
    return (points * 2) - (points / 4);
}



export default PointsBalance;
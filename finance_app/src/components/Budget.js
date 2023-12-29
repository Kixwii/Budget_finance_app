import React from 'react';

const Budget =({amount, period, progress}) => {

    const progressBar = '${{ progress }}%' ;
    return (
        <div className="budget">
            <h2>{period}</h2>
            <p>Budget Amount: ${amount}</p>
            <div className="progress-bar">
                <div className="progress" style={{width: progressBar}}>
                    <div className="slider"></div>
                </div>
            </div>
        </div>
    );
};

export default Budget;
import React from 'react';

const Budget =({amount, period, progress}) => {
    return (
        <div className="budget">
            <h2>{period}</h2>
            <p>Budget Amount: ${amount}</p>
            <p>Progress: {progress}%</p>

        </div>
    );
};

export default Budget;
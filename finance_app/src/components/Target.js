import React from 'react';

const Target = ({ title, amount, deadline }) =>{
    return(
        <div className="target">
            <h3>{title}</h3>
            <p>Target Amount: ${amount}</p>
            <p>Deadline: {deadline}</p>
        </div>
    );
};

export default Target;
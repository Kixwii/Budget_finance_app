import React from 'react';

const Expenditure = ({ category, amount , date}) => {
    return(
        <div className="expenditure">
            <h3>{category}</h3>
            <p>Amount: ${amount}</p>
            <p>Date: {date}</p>
        </div>
        
    );
};

export default Expenditure;
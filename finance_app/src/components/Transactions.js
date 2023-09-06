import React from 'react';

const Transactions = ({ transactions }) =>{
    return(
        <div className="transactions">
          <h2>Previous Transactions</h2>
          <ul>
            {transactions.map((transaction, index) =>(
                <li key={index}>
                    <div>{transaction.date}</div>
                    <div>{transaction.description}</div>
                    <div>{transaction.category}</div>
                    <div>${transaction.amount}</div>
                </li>
            ) )}
          </ul>
        </div>
    );
};

export default Transactions;
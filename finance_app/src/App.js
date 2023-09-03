import React from 'react';
import Budget from './components/Budget';
import Target from './components/Target';
import Expenditure from './components/Expenditure';
import Card from './components/Card';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Card>
        <Budget amount={1000} period="Monthly" progress={60}></Budget>
      </Card>
      <Card>
        <Target title="Vacation" amount={5000} deadline="2023-12-31"></Target>
      </Card>
      <Card>
        <Expenditure category="Groceries" amount={200} date="2023-09-03"></Expenditure>
      </Card>
    </div>
  );
};

export default App;

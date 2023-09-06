import React from 'react';
import Budget from './components/Budget';
import Target from './components/Target';
import Expenditure from './components/Expenditure';
import Card from './components/Card';
import Transactions from './components/Transactions';
import CustomCalendar from './components/Calendar';
import './App.css';

const App = () => {

  const[selectedTransactionDate, setSelectedTransactionDate] = useState(null);

  const transactions =[
    {
      date: '2023-09-02',
      description: 'Groceries',
      category:'Food',
      amount: 50,
    },
    {
      date:'2023-09-05',
      description:'Gasoline',
      category: 'Transportation',
      amount: 30,
    }
  ];
  return (
    <div className="App">
      <Card>
        <CustomCalendar onDateSelect={handleDataSelect}></CustomCalendar>
      </Card>
      <Card>
        <Budget amount={1000} period="Monthly" progress={60}></Budget>
        <Transactions transactions={transactions} selectedDate={selectedTransactionDate}></Transactions>
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

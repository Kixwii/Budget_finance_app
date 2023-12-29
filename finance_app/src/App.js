import React,{ useState} from 'react';
import Budget from './components/Budget';
import Target from './components/Target';
import Expenditure from './components/Expenditure';
import Card from './components/Card';
import Transactions from './components/Transactions';
import CustomCalendar from './components/Calendar';
import './index.css';
import TransactionForm from './TransactionForm.js'

const App = () => {
  // state to manage transactions
  const[selectedTransactionDate, setSelectedTransactionDate] = useState(null);

  const [transactions, setTransactions] = useState([
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
  ]);
  
  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  }

  const handleSetTransactionDate = (date) => {
    setSelectedTransactionDate(date);
  };

  return (
    <div className="App">
      <Card>
        <CustomCalendar onDateSelect={handleSetTransactionDate}></CustomCalendar>
      </Card>
      <Card>
        <Budget amount={1000} period="Monthly" progress={60}></Budget>
        <Transactions transactions={transactions} selectedDate={selectedTransactionDate}></Transactions>
      </Card>
      <Card>
        <TransactionForm addTransaction={addTransaction} />
        <Budget amount={1000} period="Monthly" progress={60} />
        <Transactions transactions={transactions} selectedDate={selectedTransactionDate} />
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

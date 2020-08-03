import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Income from './components/Income';
import TransactionHistory from './components/transactionHistory';
import AddTransaction from './components/addTransaction';
import { GlobalProvider } from './context/globalState';



function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
        </div>
        <Income />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

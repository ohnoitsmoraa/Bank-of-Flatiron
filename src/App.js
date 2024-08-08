import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import TransactionTable from "./components/TransactionTable";

function App() {
  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransaction(data));
  }, []);
  return (
    <div className="App">
      <h1>Transaction List</h1>
      <TransactionTable transaction={transaction} />
    </div>
  );
}

export default App;

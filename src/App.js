import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import TransactionTable from "./components/TransactionTable";
import Filter from "./components/Filter";
import { Form, Link } from "react-router-dom";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://backend-tan-seven.vercel.app/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
    fetch("https://backend-tan-seven.vercel.app/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((res) => res.json())
      .then((data) => {
        setTransactions([...transactions, data]);
      });
  };
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <h1 className="character">Transaction List</h1>
      <Filter search={search} setSearch={setSearch} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;

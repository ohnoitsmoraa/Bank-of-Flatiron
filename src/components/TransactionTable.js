import React from "react";
import Transaction from "./Transaction";

const TransactionTable = ({ transactions }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              id={transaction.id}
              date={transaction.date}
              amount={transaction.amount}
              category={transaction.category}
              description={transaction.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

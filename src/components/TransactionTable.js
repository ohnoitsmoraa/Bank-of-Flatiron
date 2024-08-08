import React from "react";
import Transaction from "./Transaction";

const TransactionTable = ({ transactions }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="head">Id</th>
            <th className="head">Date</th>
            <th className="head">Amount</th>
            <th className="head">Category</th>
            <th className="head">Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction) => (
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

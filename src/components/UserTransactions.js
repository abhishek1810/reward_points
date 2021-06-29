import React from "react";
import Transaction from "./Transaction";
export default function UserTransactions({
  userTransactions: { monthlySummary, pointsPerTransaction },
}) {
  return (
    <React.Fragment>
      {monthlySummary &&
        monthlySummary.map((user) => (
          <Transaction
            key={user.name}
            user={user}
            pointsPerTransaction={pointsPerTransaction}
          />
        ))}
    </React.Fragment>
  );
}

/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import fetch from "./api/dataService";
import ErrorBoundary from "./exceptionHandling/ErrorBoundary";
import TableHeader from "./components/TableHeader";
import UserTransactions from "./components/UserTransactions";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import ModelShaper from "./utils/ModelShaper";

export default function App() {
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    fetch().then((data) => {
      const result = ModelShaper.calculateTransactions(data);
      console.log(result);
      setTransactionDetails(result);
    });
  }, []);
  const theme = {
    backgroundColor: dark ? "grey" : "white",
  };
  return (
    <ErrorBoundary>
      <div style={theme}>
        <h1>{"Rewards program details"}</h1>
        <a href="#" style={{ float: "right" }} onClick={() => setDark(!dark)}>
          {"Change Theme"}
        </a>
        <TableContainer>
          <Table>
            <TableHeader />
            {transactionDetails && (
              <UserTransactions userTransactions={transactionDetails} />
            )}
          </Table>
        </TableContainer>
      </div>
    </ErrorBoundary>
  );
}

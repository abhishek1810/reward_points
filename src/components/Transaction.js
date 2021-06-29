import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ModelShaper from "../utils/ModelShaper";

const Transaction = (props) => {
  const { user, pointsPerTransaction } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {user.name}
        </TableCell>
        <TableCell align="center">{user.month}</TableCell>
        <TableCell align="center">{user.numTransactions}</TableCell>
        <TableCell align="center">{user.points}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                fontWeight="fontWeightBold"
              >
                {"Monthly Transaction Details"}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Transaction Date</TableCell>
                    <TableCell align="center">Total Amount($)</TableCell>
                    <TableCell align="center">Reward Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ModelShaper.getMothlyTransaction(
                    user,
                    pointsPerTransaction
                  ).map((currentDetails) => (
                    <TableRow>
                      <TableCell align="center">
                        {currentDetails.transactionDate}
                      </TableCell>

                      <TableCell align="center" component="th" scope="row">
                        {currentDetails.amount}
                      </TableCell>
                      <TableCell align="center">
                        {currentDetails.points}
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default Transaction;

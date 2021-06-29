import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

export default function TableHeader() {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="left" />
        <StyledTableCell align="left">{"Customer Name"}</StyledTableCell>
        <StyledTableCell align="center">{"Transaction Month"}</StyledTableCell>
        <StyledTableCell align="center">
          {"Number of Transactions"}
        </StyledTableCell>
        <StyledTableCell align="center">{"Reward Points"}</StyledTableCell>
        <StyledTableCell />
      </TableRow>
    </TableHead>
  );
}

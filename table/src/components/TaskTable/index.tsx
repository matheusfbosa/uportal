import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import grey from "@material-ui/core/colors/grey";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: grey[800],
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TaskTable = ({ tasks }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <StyledTableRow key={task.id}>
                <StyledTableCell align="left">{task.id}</StyledTableCell>
                <StyledTableCell align="center">{task.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {task.description}
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow key="">
              <StyledTableCell align="left">...</StyledTableCell>
              <StyledTableCell align="center">...</StyledTableCell>
              <StyledTableCell align="center">...</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;

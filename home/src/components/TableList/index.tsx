import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Title from "../Title";

const createData = (id, date, name, shipTo, paymentMethod, value) => {
  return {
    id,
    date,
    name,
    shipTo,
    paymentMethod,
    value,
  };
};

const rows = [
  createData(
    0,
    "2021-07-12",
    "James Hetfield",
    "Curitiba, PR",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "2021-07-12",
    "Paul McCartney",
    "Londres, UK",
    "Boleto",
    866.99
  ),
  createData(2, "2021-07-12", "Jimi Hendrix", "Santa Maria, RS", "Pix", 100.81),
  createData(
    3,
    "2021-07-11",
    "Roger Waters",
    "Rio de Janeiro, RJ",
    "Debit",
    654.39
  ),
  createData(4, "2021-07-11", "Robert Plant", "São Paulo, SP", "TED", 212.79),
];

const preventDefault = (e) => {
  e.preventDefault();
};

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const TableList = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship to</TableCell>
            <TableCell>Payment method</TableCell>
            <TableCell align="right">Sale amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver mais
        </Link>
      </div>
    </>
  );
};

export default TableList;

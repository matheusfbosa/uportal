import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Chart from "../Chart";
import Billboard from "../Billboard";
import TableList from "../TableList";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeightChart: {
    height: 480,
  },
  fixedHeightBillboard: {
    height: 180,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightChartPaper = clsx(classes.paper, classes.fixedHeightChart);
  const fixedHeightBillboardPaper = clsx(
    classes.paper,
    classes.fixedHeightBillboard
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightChartPaper}>
          <Chart />
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightBillboardPaper} elevation={3}>
          <Billboard
            title="Orders"
            description="on 31 July, 2021"
            value="150,123"
          />
        </Paper>
        <Divider />
        <Paper className={fixedHeightBillboardPaper} elevation={3}>
          <Billboard
            title="Recent deposits"
            description="on 31 July, 2021"
            value="$ 312,025.99"
          />
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <TableList title="Last orders" />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

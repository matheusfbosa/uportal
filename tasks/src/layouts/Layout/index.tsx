import Parcel from "single-spa-react/parcel";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(10),
      maxWidth: "lg",
    },
  })
);

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Parcel config={() => System.import("@uportal/navbar")} />
      <Container className={classes.container}>{children}</Container>
      <Parcel config={() => System.import("@uportal/footer")} />
    </>
  );
};

export default Layout;

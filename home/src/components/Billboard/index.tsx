import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../Title";

const preventDefault = (e) => {
  e.preventDefault();
};

const useStyles = makeStyles({
  context: {
    flex: 1,
  },
});

const Billboard = (props) => {
  const classes = useStyles();
  return (
    <>
      <Title>{props.title}</Title>
      <Typography component="p" variant="h4">
        {props.value}
      </Typography>
      <Typography color="textSecondary" className={classes.context}>
        {props.description}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </>
  );
};

export default Billboard;

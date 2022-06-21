import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loader: {
    marginRight: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default ({ loading, text, handleClick }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.submit}
      variant="contained"
      disabled={loading}
      type="submit"
      fullWidth
      color="primary"
      onClick={handleClick}
    >
      {loading && <CircularProgress size={20} className={classes.loader} />}
      {text}
    </Button>
  );
};

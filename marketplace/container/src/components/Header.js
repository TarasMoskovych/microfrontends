import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    backgroundColor: 'white',
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  boxWrapper: {
    alignItems: 'center',
    display: 'flex',
  },
  box: {
    marginRight: theme.spacing(1),
    position: 'relative',
    top: theme.spacing(1),
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Header({ signedIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.boxWrapper}>
            <RouterLink to="/">
              <Box
                className={classes.box}
                component="img"
                sx={{
                  height: 50,
                  width: 50,
                }}
                alt="Logo."
                src="/assets/logo.svg"
              />
            </RouterLink>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              component={RouterLink}
              to="/"
            >
              MarketPlace
            </Typography>
          </div>
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={'/auth/signin'}
            onClick={onClick}
          >
            {signedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

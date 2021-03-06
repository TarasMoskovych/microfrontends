import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PersonIcon from '@material-ui/icons/Person';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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
    '& img': {
      height: 50,
      width: 50,
    },
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    '& svg': {
      marginRight: theme.spacing(1),
    },
    '& li': {
      justifyContent: 'flex-start',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: 0,
    },
    '& a': {
      alignItems: 'center',
      display: 'flex',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
      width: '100%',
    },
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

interface IProps {
  signedIn: boolean;
  onSignOut: () => void;
}

export default ({ signedIn, onSignOut }: IProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const onClick = () => {
    handleClose();

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
              <div className={classes.box}>
                <img src={`${ASSETS_URL}/logo.svg`} alt="Logo" />
              </div>
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
          {!signedIn &&
            <Button
              color="primary"
              variant="outlined"
              className={classes.link}
              component={RouterLink}
              to={'/auth/signin'}
              onClick={onClick}
            >
              <PersonIcon />
              Login
            </Button>
          }
          {
            signedIn &&
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <AccountCircleIcon color="primary" />
            </IconButton>
          }
          <Menu
            classes={{ list: classes.menu }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={!!anchorEl}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <RouterLink to="/dashboard" color="inherit">
                <DashboardIcon />
                Dashboard
              </RouterLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <RouterLink to="/product-management" color="inherit">
                <ListAltIcon />
                Product Management
              </RouterLink>
            </MenuItem>
            <MenuItem onClick={onClick}>
              <RouterLink to="/auth/signin" color="inherit">
                <ExitToAppIcon />
                Logout
              </RouterLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

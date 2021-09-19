import React, { useContext, useState } from 'react';
import { AppBar, CssBaseline, IconButton, makeStyles, Toolbar, Typography, ListItemIcon, ListItemText, MenuItem, Menu, Grid } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { UserContext } from '../app';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => (
  {
    root: {
      backgroundColor: '#FBDCE2',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.black
      }

    },

    paper: {
      border: '1px solid #d3d4d5'
    },

    icon: {
      padding: '0',
      marginRight: theme.spacing(2)
    },

    white: {
      color: 'white',
      fontSize: '1.5em'
    }
  }));

export default function Header(props) {
  const contextValues = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const { route, handleSignOut, token } = contextValues;

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <>
    <CssBaseline/>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems='center'>
              <IconButton
                className={classes.icon}
                aria-controls="menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                <MenuIcon className={classes.white} />
              </IconButton>
              <Menu
                disableAutoFocus={true}
                className={classes.paper}
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
                value={route.path}
              >
                <MenuItem onClick={handleClose} className={route.path === '' ? classes.root : ''}>
                  <a href='#'>
                    <Grid container alignItems='center'>
                  <ListItemIcon>
                    <TodayIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Events" />
                  </Grid>
                  </a>
                </MenuItem>
                <MenuItem onClick={handleClose} className={route.path === 'search' ? classes.root : ''}>
                  <a href='#search'>
                    <Grid container alignItems='center'>
                      <ListItemIcon>
                        <SearchIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Search" />
                    </Grid>
                  </a>
                </MenuItem>
                {token &&
                  <MenuItem onClick={() => {
                    handleClose();
                    handleSignOut();
                  }}>
                    <a href='#sign-in'>
                      <Grid container alignItems='center'>
                        <ListItemIcon>
                          <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                      </Grid>
                    </a>
                </MenuItem>}
              </Menu>
              <a href='#'>
              <Typography variant="h4" color="inherit" noWrap>
                Ant&apos;s Events
              </Typography>
              </a>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

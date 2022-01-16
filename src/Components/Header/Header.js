import React from "react";
import {Hidden, AppBar, Toolbar, Typography, Button, IconButton} from "@mui/material"
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from "./Style";
import {theme} from "../../theme";

const Header = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: theme.color1}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {"<my_porfolio />"}
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Project</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
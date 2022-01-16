import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from "../../img/img1.png"
import Project from './Project/Project';
import { Grid, Box } from '@mui/material';
import { useStyles } from './Style';

const Projects = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.box}>
      <Grid container direction="row"
        justifyContent="center"
        alignItems="center">
        <Grid item xs={4}><Project img={img1} description={"amazing screen shoot"} /></Grid>
        <Grid item xs={4}><Project img={img1} description={"amazing screen shoot"} /></Grid>
        <Grid item xs={4}><Project img={img1} description={"amazing screen shoot"} /></Grid>
        <Grid item xs={4}><Project img={img1} description={"amazing screen shoot"} /></Grid>
        <Grid item xs={4}><Project img={img1} description={"amazing screen shoot"} /></Grid>
        <Grid item xs={4}><Project img={img1} description={"amazing screen shoot"} /></Grid>

      </Grid>
    </Box>
  );
}

export default Projects;
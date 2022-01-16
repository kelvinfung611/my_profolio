import React from "react";
import { Box, Grid, Typrography, Container, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Typed from "react-typed";

/*const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));*/

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>image</Grid>
        <Grid item xs={7}>
          <Typography varinat='h3' component='h4'>
            I'm a <span style={{ paddingRight: "5px" }}></span>
            <Typed
              strings={[" Webdeveloper,", " Robotics enthusiast,", " Computer Engineering student,"]}
              typeSpeed={30}
              backSpeed={50}
              loop
            />
          </Typography>
          <Typography variant="p">
            <Typography variant="h5">I'm Kelvin</Typography>
            <Typography variant="body2">
              I'm a second year computer Engineering studying at the University of Hong Kong.
              I'm interested in web development, robotics and learning new technologies. Also,
              I love joining community which provides me great opportunity to serve people and learn from each other.
              Therefore, I have joined Breed hku which is a bio-inspired robotics organization
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
import React from "react";
import {Box, Typography } from "@mui/material";
import { useStyles } from "./Style";
import { spacing } from "@mui/system";
const Footer = ()=>{
    var currentDate = new Date();
    const classes = useStyles();
    return(
    <>
        <Box className={classes.box}>
            <Typography>
                Developed and designed by Kelvin, All Right Reserved © {currentDate.getFullYear()}
            </Typography>
        </Box>
    </>)

}
export default Footer;
import { makeStyles } from '@mui/styles';
import {theme} from "../../theme"
import { createTheme } from '@mui/material/styles';

const Theme = createTheme()

export const useStyles = makeStyles((props)=>({
    box:{
    color: theme.color4,
    backgroundColor:theme.color1,
    display: 'flex',
    height: "20px",
    flexDirection: 'column',
    height: "200px",
    }
}));
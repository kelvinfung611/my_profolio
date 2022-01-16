import { makeStyles } from '@mui/styles';
import {theme} from "../../theme"
import { createTheme } from '@mui/material/styles';

const Theme = createTheme()

export const useStyles = makeStyles((props)=>({
    box:{
    backgroundColor:theme.color2,
    }
}));
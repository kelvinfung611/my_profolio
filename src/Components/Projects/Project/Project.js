import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { theme } from '../../../theme';
const Project = ({ img, description }) => {
    const [fav,setFav] = useState(false);

    return (
        <Card sx={{ maxWidth: 345 }} style={{backgroundColor: theme.color3, margin:"20px"}}>
            <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={()=>setFav(prev=>!prev)}>{fav?<FavoriteIcon />:<FavoriteBorderIcon />}</Button>
            </CardActions>
        </Card>
    );
}

export default Project;
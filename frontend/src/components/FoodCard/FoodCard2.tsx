import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppContext } from '../../context/AppContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const FoodCard2 = (props:any) => {

  const App: any = useContext(AppContext)

  const classes = useStyles();

  const handleAdd = () => {
      console.log('handleAdd')
      App.setApp([...App.app, props.food])
  }

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.food.image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.food.foodName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.food.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <strong>{props.food.price}</strong> €
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleAdd}>
          ADD TO ORDER
        </Button>
      </CardActions>
    </Card>
  );
}

export default FoodCard2
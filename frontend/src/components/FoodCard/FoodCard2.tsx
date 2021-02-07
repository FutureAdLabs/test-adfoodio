import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppContext } from '../../context/AppContext';
import { NotifContext } from '../../context/NofifContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "0 auto", 
    marginTop:"25px",
  },
  Button:{
    margin: "0 auto", 
    backgroundColor:"#2C3E50",
  }
});

const FoodCard2 = (props:any) => {

  const Notif:any = useContext(NotifContext)

  const App: any = useContext(AppContext)

  const classes = useStyles();

  const handleAdd = () => {
      App.setApp({...App.app, order: [...App.app.order, props.food]})
      Notif.run({type:"success", msg:"Your food was added to your order"})
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
          Price: <strong>{props.food.price}</strong> €
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Estimated preparation time: <strong>{props.food.preparation_time}</strong> minutes
          </Typography>
        </CardContent>
      <CardActions>
        <Button className={classes.Button} variant="contained" size="small" color="primary" onClick={handleAdd}>
          ADD TO ORDER
        </Button>
      </CardActions>
    </Card>
  );
}

export default FoodCard2
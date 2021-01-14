import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import './PokemonInstance.css';

  
  export default class PokemonInstance extends React.Component 
  {

    constructor()
    {
      super();
      this.state = { openModal: false}
      this.showPokemonDetails = this.showPokemonDetails.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }
    

    render()
    {
  
    return (
      <div>
      <Card>
        <CardActionArea>
          <CardMedia
            style={{height: 0 , paddingTop: '7%', maxWidth: '8%',display: 'block',margin: 'auto'}}
            image= {this.props.img}
            title="Pokemon Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Number: {this.props.num}| Type: {this.formatArrayForDisplay(this.props.type)}| Weaknesses: {this.formatArrayForDisplay(this.props.weakness)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick = {this.showPokemonDetails}>DETAILS</Button>
        </CardActions>
      </Card>


      <Modal
      open={this.state.openModal}
      onClose={this.handleClose}
      >
      
     
        <div className = "detailsModal">
        <h2> {this.props.name} Details</h2>
        <img src = {this.props.img}></img>
        <p>
          WEAKNESSES: {this.formatArrayForDisplay(this.props.weakness)} <br></br>
          TYPE: {this.formatArrayForDisplay(this.props.type)} <br></br>
          NUMBER: {this.props.num} <br></br>
          NAME: {this.props.name} <br></br>
          MULTIPLIERS: {this.props.multipliers} <br></br>
          SPAWN TIME: {this.props.spawn_time} <br></br>
          AVERAGE SPAWNS: {this.props.avg_spawns} <br></br>
          SPAWN CHANCE: {this.props.spawn_chance} <br></br>
          EGG: {this.props.egg} <br></br>
          CANDY COUNT: {this.props.candy_count} <br></br>
          CANDY: {this.props.candy} <br></br>
          WEIGHT: {this.props.weight} <br></br>
          HEIGHT: {this.props.height} <br></br>
        </p>
        </div>

      </Modal>
      </div>
    );
    }

    showPokemonDetails()
    {
      this.setState({openModal: true});
    }

    handleClose()
    {
      this.setState({openModal: false});
    }

    formatArrayForDisplay(array)
    {
      let display = "";
      for (let element of array)
      {
        display = display + element + ","
      }
      return display.substring(0,display.length-1);
    }
  }
    
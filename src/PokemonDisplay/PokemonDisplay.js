import React                     from 'react';
import axios                     from 'axios';
import PokemonInstance           from './PokemonInstance.js';
import { SearchComponent }       from './SearchComponent.js';
import { GET_POKEMON }           from '../Constants/Constants.js';

export class PokemonDisplay extends React.Component 
{
    constructor(props)
    {
        super();
        this.state = { pokemonToDisplay : [], listOfAllPokemon: [] };
        this.returnFilteredArray = this.returnFilteredArray.bind(this);
    }

    componentDidMount()
    {
      this.getPokemonData();
    }

    render() 
    {
      let pokedex = null;
      if(this.state.pokemonToDisplay.length > 0)
      {
        pokedex = this.state.pokemonToDisplay.map((element) => (
          <PokemonInstance
          multipliers =   {element.multipliers}
          spawn_time =    {element.spawn_time}
          avg_spawns =    {element.avg_spawns}
          spawn_chance =  {element.spawn_chance}
          egg =           {element.egg}
          candy_count =   {element.candy_count}
          candy =         {element.candy}
          weight =        {element.weight}
          height =        {element.height}
          weakness =      {element.weaknesses}
          type =          {element.type}
          num =           {element.num}
          name =          {element.name} 
          img =           {element.img}
          id =            {element.id} 
          key =           {element.id} />
        ))
        return (
        <div>
          <SearchComponent
            currentPokemonArray = {this.state.pokemonToDisplay}
            listOfAllPokemon = {this.state.listOfAllPokemon}
            returnFilteredArray = {this.returnFilteredArray}
          />
          <div>{pokedex}</div>
        </div>
        );
      }
      else
      {
        return <div>
          <SearchComponent
            currentPokemonArray = {this.state.pokemonToDisplay}
            listOfAllPokemon = {this.state.listOfAllPokemon}
            returnFilteredArray = {this.returnFilteredArray}
          />
          NO POKEMON WITH THE GIVEN SEARCH PARAMETERS FOUND</div>;
      }
    }

    returnFilteredArray(filteredPokemonSet)
    {
      this.setState({pokemonToDisplay: filteredPokemonSet});
    }

    async getPokemonData()
    {
      const response =
        await axios.get(GET_POKEMON)
        if(response.status === 200)
        {
          let currentDisplay = response.data.pokemon;
          this.setState({pokemonToDisplay: currentDisplay, listOfAllPokemon: currentDisplay})
        }
    }
  }
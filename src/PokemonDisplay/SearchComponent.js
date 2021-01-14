import React       from 'react';
import SearchField from "react-search-field";

export class SearchComponent extends React.Component 
{

    constructor()
    {
        super();
        this.filterPokemonArrayByName = this.filterPokemonArrayByName.bind(this);
        this.setFilterState = this.setFilterState.bind(this);
        this.state = 
        {
            typeFireFilterOn: false,
            typeGrassFilterOn: false,
            typePoisonFilterOn: false,
            typeFlyingFilterOn: false,
            typeWaterFilterOn: false,
            typeBugFilterOn: false,
            typeNormalFilterOn: false,
            typeElectricFilterOn: false,
            typeGroundFilterOn: false,
            typeFightingFilterOn: false,
            typePsychicFilterOn: false,
            typeIceFilterOn: false,
            typeRockFilterOn: false,
            typeGhostFilterOn: false,
            typeDragonFilterOn: false,

            weakFireFilterOn: false,
            weakGrassFilterOn: false,
            weakPoisonFilterOn: false,
            weakFlyingFilterOn: false,
            weakWaterFilterOn: false,
            weakBugFilterOn: false,
            weakNormalFilterOn: false,
            weakElectricFilterOn: false,
            weakGroundFilterOn: false,
            weakFightingFilterOn: false,
            weakPsychicFilterOn: false,
            weakIceFilterOn: false,
            weakRockFilterOn: false,
            weakGhostFilterOn: false,
            weakDragonFilterOn: false,
        }
    }

    render() 
    {
        return <div><SearchField
        placeholder="Search by Pokemon Name"
        onSearchClick={this.filterPokemonArrayByName}
        classNames="test-class"
        />
        
        <div>FILTER BY TYPE:
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Fire" onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> FIRE</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Grass" onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> GRASS</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Poison"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> POISON</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Flying"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> FLYING</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Water"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> WATER</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bug"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> BUG</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Normal"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> NORMAL</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Electric"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> ELECTRIC</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Ground"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> GROUND</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Fighting"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> FIGHTING</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Psychic"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> PSYCHIC</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Rock"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> ROCK</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Ice"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> ICE</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Ghost"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> GHOST</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Dragon"  onChange = {this.filterPokemonArrayByType.bind(this)} />
        <label for="vehicle1"> DRAGON</label>

        <br></br>

        </div>

        <br></br>

        <div>FILTER BY WEAKNESS:

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Fire" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> FIRE</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Grass" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> GRASS</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Poison" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> POISON</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Flying" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> FLYING</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value= "Water" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> WATER</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bug" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> BUG</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Normal" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> NORMAL</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Electric" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> ELECTRIC</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Ground" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> GROUND</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Fighting" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> FIGHTING</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Psychic" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> PSYCHIC</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Rock" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> ROCK</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Ice" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> ICE</label>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Ghost" onChange = {this.filterPokemonArrayByWeakness.bind(this)}/>
        <label for="vehicle1"> GHOST</label> <br></br>

        <input type="checkbox" id="vehicle1" name="vehicle1" value="Dragon" onChange = {this.filterPokemonArrayByWeakness.bind(this)} />
        <label for="vehicle1"> DRAGON</label> 

        </div>
        
        </div>;
    }

    filterPokemonArrayByName(value)
    {
        //TO DO: ADD ENTER FUNCTION.
        let filteredArray = [];
        for (let element of this.props.currentPokemonArray)
        {
            if(element.name === value)
            {
                filteredArray.push(element);
            }
        }
        this.props.returnFilteredArray(filteredArray);
    }

    filterPokemonArrayByType(e)
    {
        if(e.target.checked)
        {
            this.setFilterState(e.target.value,"TYPE",true);
        }
        else
        {
            this.setFilterState(e.target.value,"TYPE",false);
        }
    }

    filterPokemonArrayByWeakness(e)
    {
        if(e.target.checked)
        {
            this.setFilterState(e.target.value,"WEAK",true);
        }
        else
        {
            this.setFilterState(e.target.value,"WEAK",false);
        }
    }

    
    returnActiveWeaknessTypes()
    {
        let typeList = [];
        if(this.state.weakFireFilterOn)
        {
            typeList.push("Fire");
        }
        if(this.state.weakGrassFilterOn)
        {
            typeList.push("Grass");
        }
        if(this.state.weakPoisonFilterOn)
        {
            typeList.push("Poison");
        }
        if(this.state.weakFlyingFilterOn)
        {
            typeList.push("Flying");
        }
        if(this.state.weakWaterFilterOn)
        {
            typeList.push("Water");
        }
        if(this.state.weakBugFilterOn)
        {
            typeList.push("Bug");
        }
        if(this.state.weakNormalFilterOn)
        {
            typeList.push("Normal");
        }
        if(this.state.weakElectricFilterOn)
        {
            typeList.push("Electric");
        }
        if(this.state.weakGroundFilterOn)
        {
            typeList.push("Ground");
        }
        if(this.state.weakFightingFilterOn)
        {
            typeList.push("Fighting");
        }
        if(this.state.weakPsychicFilterOn)
        {
            typeList.push("Psychic");
        }
        if(this.state.weakRockFilterOn)
        {
            typeList.push("Rock");
        }
        if(this.state.weakIceFilterOn)
        {
            typeList.push("Ice");
        }
        if(this.state.weakGhostFilterOn)
        {
            typeList.push("Ghost");
        }
        if(this.state.weakDragonFilterOn)
        {
            typeList.push("Dragon");
        }
        return typeList;
    }

    returnActiveFiltrationTypes()
    {
        let typeList = [];
        if(this.state.typeFireFilterOn)
        {
            typeList.push("Fire");
        }
        if(this.state.typeGrassFilterOn)
        {
            typeList.push("Grass");
        }
        if(this.state.typePoisonFilterOn)
        {
            typeList.push("Poison");
        }
        if(this.state.typeFlyingFilterOn)
        {
            typeList.push("Flying");
        }
        if(this.state.typeWaterFilterOn)
        {
            typeList.push("Water");
        }
        if(this.state.typeBugFilterOn)
        {
            typeList.push("Bug");
        }
        if(this.state.typeNormalFilterOn)
        {
            typeList.push("Normal");
        }
        if(this.state.typeElectricFilterOn)
        {
            typeList.push("Electric");
        }
        if(this.state.typeGroundFilterOn)
        {
            typeList.push("Ground");
        }
        if(this.state.typeFightingFilterOn)
        {
            typeList.push("Fighting");
        }
        if(this.state.typePsychicFilterOn)
        {
            typeList.push("Psychic");
        }
        if(this.state.typeRockFilterOn)
        {
            typeList.push("Rock");
        }
        if(this.state.typeIceFilterOn)
        {
            typeList.push("Ice");
        }
        if(this.state.typeGhostFilterOn)
        {
            typeList.push("Ghost");
        }
        if(this.state.typeDragonFilterOn)
        {
            typeList.push("Dragon");
        }
        return typeList;
    }

    implementTheFiltrationState()
    {
         let filteredArray = [];
         let arrayOfElements = this.returnActiveFiltrationTypes();
         let arrayOfWeaknesses = this.returnActiveWeaknessTypes();
            for (let element of this.props.listOfAllPokemon)
            {
                let addToFilteredArray = true;
                for(let type of arrayOfElements)
                {
                    if(!this.containsType(element.type,type))
                    {
                        addToFilteredArray = false;
                        break;
                    }
                }
                for(let weak of arrayOfWeaknesses)
                {
                    if(!this.containsType(element.weaknesses,weak))
                    {
                        addToFilteredArray = false;
                        break;
                    }
                }
                if(addToFilteredArray)
                {
                    filteredArray.push(element);
                }
            }
            this.props.returnFilteredArray(filteredArray);
    }

    setFilterState(type,filtrationCategory,booleanState)
    {
        if(filtrationCategory === "TYPE")
        {
            switch(type)
            {
                case "Fire": this.setState({typeFireFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Grass": this.setState({typeGrassFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Poison": this.setState({typePoisonFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Flying": this.setState({typeFlyingFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Water": this.setState({typeWaterFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Bug": this.setState({typeBugFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Normal": this.setState({typeNormalFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Electric": this.setState({typeElectricFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Ground": this.setState({typeGroundFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Fighting": this.setState({typeFightingFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Psychic": this.setState({typePsychicFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Rock": this.setState({typeRockFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Ice": this.setState({typeIceFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Ghost": this.setState({typeGhostFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Dragon": this.setState({typeDragonFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
            }
        }
        else
        {
            switch(type)
            {
                case "Fire": this.setState({weakFireFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Grass": this.setState({weakGrassFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Poison": this.setState({weakPoisonFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Flying": this.setState({weakFlyingFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Water": this.setState({weakWaterFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Bug": this.setState({weakBugFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Normal": this.setState({weakNormalFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Electric": this.setState({weakElectricFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Ground": this.setState({weakGroundFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Fighting": this.setState({weakFightingFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Psychic": this.setState({weakPsychicFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Rock": this.setState({weakRockFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Ice": this.setState({weakIceFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Ghost": this.setState({weakGhostFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
                case "Dragon": this.setState({weakDragonFilterOn: booleanState}, () => this.implementTheFiltrationState());
                break;
            }
        }
    }

    containsType(list,type)
    {
        for(let element of list)
        {
            if(element === type)
            {
                return true;
            }
        }
        return false;
    }
}
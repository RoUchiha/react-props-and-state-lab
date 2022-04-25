import React from 'react'

import Filters from './Filters.js'
import PetBrowser from './PetBrowser.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  setType = ( {target: {value} }) => {
    this.setState({
      filters: {
        ...this.state.filters,
      type: value
      }
    })
    return console.log(this.state.filters.type)
  }

  fetchPets = () => {
    if (this.state.filters.type == 'all') {
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(pets => this.setState({ pets: pets }))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets: pets }))
    }
  }


  adoptPet = petId => {
    const pets = this.state.pets.map( pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet;
    });
    this.setState({ pets: pets })
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.setType} 
              onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

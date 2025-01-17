import React from 'react'

class Pet extends React.Component {
  render() {

    
    if (this.props.pet.gender == 'male') {
      const gender = '♂'
    } else {
      const gender = '♀'
    }


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet

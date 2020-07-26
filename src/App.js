import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      breed: "",
      birthday: "",
      gender: "",
      fixed: "",
      weight: "",
      formCompleted: false
    }
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onBreedChange = (event) => {
    this.setState({
      breed: event.target.value
    })
  }

  onBirthChange = (event) => {
    this.setState({
      birthday: event.target.value
    })
  }

  isMale = (event) => {
    event.preventDefault()
    this.setState({
      gender: "male"
    })
  }

  isFemale = (event) => {
    event.preventDefault()
    this.setState({
      gender: "female"
    })
  }

  isFixed = (event) => {
    event.preventDefault()
    this.setState({
      fixed: true
    })
  }

  isIntact = (event) => {
    event.preventDefault()
    this.setState({
      fixed: false
    })
  }

  isLight = (event) => {
    event.preventDefault()
    this.setState({
      weight: "0-24 lbs"
    })
  }

  isMedium = (event) => {
    event.preventDefault()
    this.setState({
      weight: "25-49 lbs"
    })
  }

  isHeavy = (event) => {
    event.preventDefault()
    this.setState({
      weight: "50-74 lbs"
    })
  }

  isXHeavy = (event) => {
    event.preventDefault()
    this.setState({
      weight: "75-100 lbs"
    })
  }

  isFormCompleted = (event) => {
    event.preventDefault()
    this.setState({
      formCompleted: true
    })
  }

  render(){
    return(
      <div>
        <div className = "bigForm">
          <div className = "form-panel">
            <h1>Pawtastic</h1>
            <img className = "panel-image" src="./purpledog.jpg" alt="dogImage"/>
          </div>
         
          <div className = "comp-1">
            <h1>Yay, we love dogs! Give us <br/> the basics about your pup.</h1>
          </div>

          <div className = "comp-2">
            <p>Name</p>
            <input type = "name" className = "field" value = {this.state.name} onChange = {this.onNameChange} placeholder = "Pet's name"></input>
          </div>

          <div className = "comp-3">
            <button className = 'button' onClick = {this.isMale}>Upload a photo</button>
          </div>

          <div className = "comp-4">
            <p>Breed</p>
            <input type = "breed" className = "field" value = {this.state.breed} onChange = {this.onBreedChange} placeholder = "Pet's breed"></input>
          </div>

          <div className = "comp-5">
            <p>Birthday</p>
            <input type = "birthday" className = "field" value = {this.state.birthday} onChange = {this.onBirthChange} placeholder = "MM/DD/YYYY"></input>
          </div>

          <div className = "comp-6">
            <p>Gender</p>
            <button className = 'button' onClick = {this.isMale}>Male</button>
            <button className = 'button' onClick = {this.isFemale}>Female</button>
          </div>

          <div className = "comp-7">
            <p>Spayed or Neutered</p>
            <button className = 'button' onClick = {this.isFixed}>Yes</button>
            <button className = 'button' onClick = {this.isIntact}>No</button>
          </div>

          <div className = "comp-8">
            <p>Weight</p>
            <button className = 'button' onClick = {this.isLight}>0-24 lbs</button>
            <button className = 'button' onClick = {this.isMedium}>25-49 lbs</button>
          </div>

          <div className = "comp-9">
            <button className = 'button' onClick = {this.isHeavy}>50-74 lbs</button>
            <button className = 'button' onClick = {this.isXHeavy}>75-100 lbs</button>
          </div>

          <div className = "comp-10">
            <button className = 'button'>Back</button>
          </div>

          <div className = "comp-11">
            <button className = 'button' onClick = {this.isFormCompleted}>Next</button>
          </div>

          <div className = "comp-12">
            <a href=".">Save and exit</a>
          </div>
        </div>
        
        {this.state.formCompleted === true
          ? alert("Thank you for entering your doggo's info! We will get in touch with you soon!")
          : null
        }
      </div>
    )
  }
}
export default App;
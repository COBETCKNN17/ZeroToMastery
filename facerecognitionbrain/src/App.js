import React, { Component } from 'react';
import './App.css';import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Particles from 'react-particles-js';
import './App.css'; 

const app = new Clarifai.App({
 apiKey: 'c3a4328360974a1bbbcb25b8b3e0ab41'
});

const particlesOptions = {
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800
              }
            }
          }
        }; 

class App extends Component {
  // to make state 
  constructor(){
      super();
      this.state = {
        input: '',
        imageUrl: '',
        box: {}
      }
  }

  calculateFaceLocation = (data) => {
    // want to call this function based on inputs we get from Clarifai
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box; 
    // DOM manipulation
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height); 
    return {
      // object will find the dots and then wrap it into a border
      leftCol: clarifaiFace.left_col * width, // percentage of the width
      topRow: clarifaiFace.top_row * height, 
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('click'); 
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response))) // ES6 shorthand function syntax
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
              params={particlesOptions}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} /> 
      </div>
    );
  }
}

export default App;

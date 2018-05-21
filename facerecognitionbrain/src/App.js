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
        imageUrl: ''
      }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('click'); 
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
      }
    );
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
        <FaceRecognition imageUrl={this.state.imageUrl} /> 
      </div>
    );
  }
}

export default App;

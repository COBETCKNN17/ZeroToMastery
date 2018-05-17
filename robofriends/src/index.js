import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; // parent of Card 
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import robots from './robots'

ReactDOM.render(
		<App />, document.getElementById('root'));
registerServiceWorker();

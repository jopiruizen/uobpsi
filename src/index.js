import React from 'react';
import ReactDOM from 'react-dom';
 

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from  './reducers'
import App from './components/app';


//const createStoreWithMiddleware =    applyMiddleware ( promiseMiddleware ) ( createStore );
const store = createStore ( reducers,  applyMiddleware(promiseMiddleware, thunk) );

ReactDOM.render(

	<Provider store={ store }  >
			<App />
	</Provider>,
	 
	document.getElementById('root')
);




 
import { combineReducers } from 'redux';
import http_request from './http_request_reducer';
 

const all_reducers = combineReducers ( 
	{
		http_request 
	}
)

export default all_reducers;
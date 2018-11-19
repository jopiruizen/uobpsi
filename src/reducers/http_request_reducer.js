
export default function http_request_reducer (state = {} , action ) {
 	//console.log("http_request_reducer...");
 	///console.log(action.tweets);
	switch( action.type ) {

		case "PSI_LOADED":
			return { ...state, psi: action.psi };
		default: 
			return state;
	}

	return state;
}

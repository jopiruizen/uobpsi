class LocalStoreUtil {
	
	constructor() {

	}

	save = ( key , content  ) => {
		//console.log("Save new excel");
		var cstr = JSON.stringify( content );
		localStorage.setItem ( key  , cstr );
	}

	loadFromKey = ( key ) => {
		//console.log("Get_Prev_excel");
		if( localStorage.getItem( key ) == null)  {
			//console.log("it's null..");
			return null;
		}
	
		var cstr = localStorage.getItem( key )
		var data ={} ;
		eval ( "data = " + cstr + "");
		 
		return data ;
	}
}

export default LocalStoreUtil;
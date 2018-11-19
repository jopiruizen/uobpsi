import HTTPService from "./http_service";
import LocalStoreUtil from "./local_store_util";
import PSIHelper from "./psi_helper"; 

export  function  save_settings ( settings  ) {
	
	return  {
		type: "SETTINGS_SAVED",
		settings: settings 
	};
	 
}

export function load_settings () {
	return  {
		type: "SETTINGS_SAVED"  
	};
	 
}

function dateStringFromDate ( date ) {
	let year = date.getFullYear();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	if( day < 10 ) day = "0" + day;
	if( month  < 10 ) month = "0" + month;
	return year + "-" + month + "-" + day;
}



export async  function  get_psi () {
 	
	let date = new Date();

	 
	let datestr = dateStringFromDate( date ) ;


	let req = new HTTPService();	

	let promise = req.get("https://api.data.gov.sg/v1/environment/psi?date=" + datestr  );
	let data = await promise;
	let psi = JSON.parse( data.response );
	 

	//if( psi.items < 10 ) {
		date.setDate( date.getDate() - 1);
		datestr = dateStringFromDate(date);
		promise = req.get("https://api.data.gov.sg/v1/environment/psi?date=" + datestr  );	
		
		data = await promise;
		let yesterday_psi = JSON.parse ( data.response );
		psi.items = yesterday_psi.items.concat (  psi.items );
		console.log( psi.items );
	//}

	



	let helper =new PSIHelper();
	/*
	console.log( "PSI Data");
	console.log( psi );
	*/
	helper.parse( psi );

	return { type:"PSI_LOADED", psi: helper.data  } ;
}

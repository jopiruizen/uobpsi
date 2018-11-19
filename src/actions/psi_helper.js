
class PSIHelper  {
	constructor () {

		this.data = {
			west: [],
			east: [],
			north: [],
			south: [],
			central: [],
			national: []
		}
	}

 	reset (){
 		this.data = {
			west: [],
			east: [],
			north: [],
			south: [],
			central: [],
			national:[]
		}
 	}

	getHour ( timestamp ) { 
		let  time = timestamp.split("T")[1];
		let time_arr = time.split(":");
		let hour = time_arr[0];
		let full_hour = "";

		let hour_num = Number( hour );
		let ampm = "AM";
		if( hour_num > 12 ) {
			hour_num = hour_num - 12;
			ampm = "PM";
		} else if( hour_num == 12 ) {
			ampm = "PM";		
		}

		full_hour =  hour_num + ":00 " + ampm; 
		if( hour_num < 10 ) {
			full_hour = "0" + full_hour;
		} 
		return full_hour;
	}


	/*
		readings.
		psi_twenty_four_hourly
	*/

	parse = (psi_data) => {
		this.reset();

		let items = psi_data.items;
		let start = 0;
		if( items.length > 10 ) {
			start = items.length - 10;
		}

		let x = 0;
		for( let i = start ; i < items.length; i++ ) {

			let item = items[i];
			let  hour = this.getHour ( item.timestamp );
			
			let psi = item.readings.psi_twenty_four_hourly;
			this.groupByRegion ( psi , hour );
			x++;
		}
		/*
		console.log("complete data...");
		console.log( this.data );
		*/
	}



	groupByRegion ( psi , hour ) {
		for( let region in psi  ) {
			this.pushToRegion ( region , hour, psi[region] )
		}
	}

	pushToRegion( region , hour , psi ) {
		// console.log("region " + region );
		let x = this.data[region].length ;
		let y = psi;
		 this.data[region].push (  
		 		{
		 			x: x , y: y , hour: hour, psi: psi, label: "" + y, size:12
		 		}     
		 	)
	}

}	
export default PSIHelper;
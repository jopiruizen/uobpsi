class HTTPService {

	constructor() {}

	post = ( url , json ={} ) => {
 		const  promise_func = ( resolve, reject ) => {
 			var xhttp = new XMLHttpRequest();
 			
 			if( xhttp == null && window.XMLHttpRequest == undefined ) {
 				eval ('xhttp = new ActiveXObject("Microsoft.XMLHTTP")'); //for older IE
 			}

			xhttp.onreadystatechange = function() {
	    		if (this.readyState == 4 && this.status == 200) {       		 
       				//console.log( xhttp.responseText );
       				resolve ( {response: xhttp.responseText, status:"ok"} );
	   			} else if( this.readyState == 4 && this.status != 200 ) {
	   				resolve ( {response: "error", status:"error"} );
	   			}
   			}

   			var dummy = Math.random() * 10000;

   			var urlStr = url + "?dummy=" + dummy;
   			//console.log("URL : " + urlStr );
			xhttp.open("POST", urlStr , true);
			//xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

			xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
  			 xhttp.setRequestHeader('Content-type', 'application/json');
   			 xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');

			var data = new FormData() ;
			data.append("json_data", JSON.stringify (json) );
			xhttp.send(data);
 		};
 		return new Promise( promise_func );
	}


	get = ( url  ) => {
 		const  promise_func = ( resolve, reject ) => {
 			var xhttp = new XMLHttpRequest();
 			
 			if( xhttp == null && window.XMLHttpRequest == undefined ) {
 				eval ('xhttp = new ActiveXObject("Microsoft.XMLHTTP")'); //for older IE
 			}

			xhttp.onreadystatechange = function() {
	    		if (this.readyState == 4 && this.status == 200) {       		 
       				//console.log( xhttp.responseText );
       				resolve ( {response: xhttp.responseText, status:"ok"} );
	   			} else if( this.readyState == 4 && this.status != 200 ) {
	   				resolve ( {response: "error", status:"error"} );
	   			}
   			}
   			//console.log("URL : " + urlStr );
			xhttp.open("GET", url , true);
			xhttp.setRequestHeader('Content-type', 'application/json');
			xhttp.send();
 		};
 		return new Promise( promise_func );
	}
}

export default HTTPService;
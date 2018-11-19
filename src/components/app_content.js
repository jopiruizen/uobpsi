import React, { Component } from 'react';
import ChartToggles from './chart_toggles';
import PSIChart from './psi_chart';

class AppContent extends Component {

	state = {
		chart:{} 
	}

	constructor(props) {
		super(props );
		this.chart_ref = React.createRef();
	}

	shouldComponentUpdate(nextProps, nextState ) {
		 if( nextProps.chartData != null && nextProps.chartData != undefined ) {
		 	this.state.chart =nextProps.chartData;
		 	return true;
		 }

		 return true;
		 
	}

	toggleCallback = ( name, isOn ) => {
		//console.log(" toggle " + name + " isOn " + isOn );
		//console.log( this.chart_ref );
		
		this.chart_ref.current.checkToggles( { name:name, isOn: isOn } );
		//this.chart_ref.current.props.reference.me.checkToggles( { name:name, isOn: isOn } );

		 
	}

	render() {
		return ( 
			<div className="app-content" >
				<div className="page-title"> Singapore Pollutant Standards Index for the Last 10 Hours </div>
				
				<PSIChart ref={this.chart_ref} chartData={this.state.chart} 
				 
				 />

				<ChartToggles toggleCallback={this.toggleCallback} />
			</div>
		)
	}
}


export default AppContent;
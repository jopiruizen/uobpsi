import React, { Component } from 'react';


import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LabelSeries, Crosshair, LineSeries, LineMarkSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';


class PSIChart extends Component {


	labelStyle = {
		fontSize:'12px' 
	}

	datastore =  {};

	constructor (props){
		super(props );

		this.state = {
			east: [],
			west: [],
			north: [],
			south: [],
			national: [],
			central: [],

			east_opacity: 0.8,
			west_opacity: 0.8,
			north_opacity: 0.8,
			south_opacity: 0.8,
			national_opacity: 0.8,
			central_opacity: 0.8,

			chart_width: 600,
			chart_height: 320 
		}

		this.container = React.createRef();

	}

	xLabelFormat = ( x ) => {
		return  "" + this.datastore.east[x].hour;
	}


	shouldComponentUpdate( nextProp, nextState ) {
		if( nextProp.chartData != null &&  nextProp.chartData != undefined ) {

			this.datastore.east = nextProp.chartData.east;
			this.datastore.west = nextProp.chartData.west;
			this.datastore.north = nextProp.chartData.north;
			this.datastore.south = nextProp.chartData.south;
			this.datastore.national = nextProp.chartData.national;
			this.datastore.central = nextProp.chartData.central;
			 
			this.state.east = nextProp.chartData.east;
			this.state.west = nextProp.chartData.west;
			this.state.north = nextProp.chartData.north;
			this.state.south = nextProp.chartData.south;
			this.state.national = nextProp.chartData.national;
			this.state.central = nextProp.chartData.central;	

			let node = this.container.current;

		//	console.log( node );
		//		console.log("Width " + node.clientWidth + " height: " + node.clientHeight );
			this.state.chart_width =  Number( node.clientWidth  * 0.95 );
			this.state.chart_height = Number(node.clientHeight);

		} 
 

		return true;
	}

	checkToggles ( toggles ) {
		//console.log("Check Toggles");
		let opacity_value = 0.8;
		let style = this.labelStyle;
		if( toggles.isOn == false ) {
			opacity_value = 0;
			this.state[toggles.name] = [];
		}  else {
			this.state[toggles.name] = this.datastore[toggles.name];
		}
		 


		//this.state[toggles.name +"_opacity"] = opacity_value;
		//this.state[toggles.name + "_style"] = style;
		
		this.setState({dummy:""});
	}
 
  
 
	 
	render() {
 		 
	    return (
	    	<div ref={this.container} className="chart-content" >

	    		<XYPlot  width= {this.state.chart_width} height={this.state.chart_height}>

					  <VerticalGridLines />
					  <HorizontalGridLines />

					  <XAxis tickFormat={this.xLabelFormat} tickTotal={10}/>
					  <YAxis />

					  <LineSeries  opacity={this.state.north_opacity} data={this.state.north} color="#51BAF2"  stroke="#51BAF2"
					  />

					  <LabelSeries opacity={this.state.north_opacity} data={this.state.north}  color="#FD6461"  stroke="#FD6461" 
					  	labelAnchorX="left" labelAnchorY="middle" style={this.labelStyle}
					  />


					  <LineSeries opacity={this.state.east_opacity} data={this.state.east}  color="#71CA58" stroke="#71CA58"

					  />
					  
					  <LabelSeries opacity={this.state.east_opacity} data={this.state.east}  color="#FD6461"  stroke="#FD6461" 
					  	labelAnchorX="left" labelAnchorY="middle" style={this.labelStyle}
					  />


					  <LineSeries opacity={this.state.south_opacity} data={this.state.south} color="#F7A650"  stroke="#F7A650"/>
					  
					   <LabelSeries opacity={this.state.south_opacity} data={this.state.south}  color="#FD6461"  stroke="#FD6461" 
					  	labelAnchorX="left" labelAnchorY="middle" style={this.labelStyle}
					  />


					  <LineSeries opacity={this.state.west_opacity} data={this.state.west}  color="#D08CE0" stroke="#D08CE0"/>
					  
					  <LabelSeries opacity={this.state.west_opacity} data={this.state.west}  color="#FD6461"  stroke="#FD6461" 
					  	labelAnchorX="left" labelAnchorY="middle" style={this.labelStyle}
					  />


					  <LineSeries opacity={this.state.central_opacity} data={this.state.central}  color="#138897" stroke="#138897"
					  	onValueClick={this.chartInteract}
					  />
					  
					  <LabelSeries opacity={this.state.central_opacity} data={this.state.central}  color="#FD6461"  stroke="#FD6461" 
					  	labelAnchorX="left" labelAnchorY="middle" style={this.labelStyle}
					  />


					  <LineSeries opacity={this.state.national_opacity} data={this.state.national}  color="#FD6461"  stroke="#FD6461" />
					  <LabelSeries opacity={this.state.national_opacity} data={this.state.national}  color="#FD6461"  stroke="#FD6461" 
					  	labelAnchorX="left" labelAnchorY="middle" style={this.labelStyle}
					  />
 		

		 		</XYPlot>
	    	</div>
	     
	    );

	}

}

export default PSIChart;
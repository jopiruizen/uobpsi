import React, { Component } from 'react';
 
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {get_psi} from '../actions';

import '../css/app_styles.css';

import AppContent from './app_content';
 
const mapStateToProps = ( state ) => {
	 return { 
	 	chart: state.http_request.psi
	 };
}

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators ({get_psi } , dispatch);
}
 

class App extends Component {

	state = {
		chart:{}  
	}
	chart = {};

	componentDidMount() {
			 this.props.get_psi();
	}

	shouldComponentUpdate( nextProp , nextState) {
		if( nextProp.chart != null ) {
			this.chart =nextProp.chart;
			return true;
		}   
 
		return false;
	}


	render() {
		return ( 
			<div className="app" >
				<AppContent chartData={this.chart} />
			</div>
		)
	}

}


export default connect(mapStateToProps, mapDispatchToProps) (App);


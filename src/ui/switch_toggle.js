import React, { Component } from 'react';



 
class SwitchToggle extends Component {

	OFF_STYLE = {
		display:'flex',
		width: '40px',
		height: '20px',
		backgroundColor: '#EFEFEF',
		borderRadius:'10px',
		justifyContent:'flex-start',

		cursor:'pointer'
	};

	ON_STYLE = {
		display:'flex',
		width: '40px',
		height: '20px',

		borderRadius:'10px',
		backgroundColor: '#FF9900',
		justifyContent:'flex-end',
		
		cursor:'pointer'
	}

	state = {
		selectedColor: '#FF0000',
		switchBody: {
			display:'flex',
			width: '40px',
			height: '20px',
			backgroundColor: '#EFEFEF',
			borderRadius:'10px',
			justifyContent:'flex-start',
		
			cursor:'pointer'
		},

		switchKnob: {
			display:'block',
			position: 'relative',
			width:'18px',
			height:'18px',
			top:'1px',
			  
			boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.6)',

			backgroundColor: '#F1F1F1',
			borderRadius:'9px',

			cursor:'pointer'
			
		},



		isOn: false
	}

	clone  (source ) {
		var cloned = {};
		for( let i in source ) {
			cloned[i] = source[i];
		}
		return cloned;
	}

	__toggle = (event) => {

		this.state.isOn = !this.state.isOn;
		if( this.state.isOn ) {
			let style_clone = this.clone ( this.ON_STYLE );
			style_clone.backgroundColor = this.state.selectedColor;
			this.setState( { switchBody: style_clone } );
		} else {
			this.setState( { switchBody: this.OFF_STYLE } );
		}

		if( this.props.toggleCallback != undefined ) {
			this.props.toggleCallback( this.props.name ,  this.state.isOn);
		}
	}


	shouldComponentUpdate(nextProps, nextState) {
		if( nextProps.color ) {
			this.state.selectedColor = nextProps.color;
		} 

		if( nextProps.isOn === true ) {
			this.state.isOn = nextProps.isOn;
			let style_clone = this.clone ( this.ON_STYLE );
			style_clone.backgroundColor = this.state.selectedColor;
			this.state.switchBody = style_clone;

		} 

		if( nextProps.isOn == false ) {
			this.state.isOn = nextProps.isOn;
			this.state.switchBody = this.OFF_STYLE;
		} 
		return true;
	}

	render() {
		return (
			<div style={this.state.switchBody} onClick={this.__toggle}>
				<div style={this.state.switchKnob}  >
				</div>
			</div>
		);
	}
}
export default SwitchToggle;
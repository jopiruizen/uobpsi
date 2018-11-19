
import React, { Component } from 'react'; 

import ReactDOM from 'react-dom';

import CoolDropdownItem from './cool_dropdown_item'


class CoolDropdown extends Component {

 	props = { dataProvider:[]}

	constructor (props) { 
		super(props);
		this.button_ref = React.createRef();
		this.dropitems = [];
	}

	selectCallback = ( index, data ) => {
		let button = this.button_ref.current;
		button.innerHTML = data.label;
		this.deselect ( index );
		if ( this.props.itemSelectedCallback ) {
			this.props.itemSelectedCallback ( index, data );
		}
	}
 
 	deselect( exclude_index ) {
 		for( let i=0; i < this.dropitems.length;i++ ) {
 			var jsx = this.dropitems[i];
 			if( jsx.props.reference.me != null && i !== exclude_index) {
 				jsx.props.reference.me.deselect();
 			}
 		}
 	}

	renderItemRenderer () {
		this.dropitems = [];
		for( let i = 0; i < this.props.dataProvider.length; i++ ) {
			let item = this.props.dataProvider[i];
			let dropitem  = ( <CoolDropdownItem 
								reference={{name:"-"}}
								key={i} data={item} index={i} selectCallback={this.selectCallback} 	 
					/> );
			this.dropitems.push( dropitem  );
		}
		return this.dropitems;
	}

	render() {
		return ( 
			<div className="dropdown" >
			  <button className="dropbtn"> 
			  	<div ref={this.button_ref} className="label" > {this.props.defaultLabel} </div>
			  	<div className="icon" > <i className="fas fa-chevron-down"> </i> </div>

			  </button>

			  <div className="dropdown-content">
			  	{this.renderItemRenderer()}
			  </div>
			</div>
		);
	}
}

export default CoolDropdown;
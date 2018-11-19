 
import React, { Component } from 'react'; 

import ReactDOM from 'react-dom';


class CoolDropdownItem extends Component {

	STYLE_ITEM_SELECTED = "dropdown-item-renderer selected";
	STYLE_ITEM_UNSELECTED = "dropdown-item-renderer unselected";

	data = {};
	props = {
		 
	}
	constructor (prop) {
 		super(prop);
		this.ref = React.createRef();
	}

	__optionSelected = (event) => {
		var node = event.target;
		if( node.getAttribute("data-selected") !== true) {
			node.className = this.STYLE_ITEM_SELECTED;
			node.setAttribute("data-selected", true );
			this.props.selectCallback ( this.index , this.data );
		} 	
	}

	deselect () {
		this.data.selected = false;
		var div = this.ref.current;
		div.className = this.STYLE_ITEM_UNSELECTED;
	} 

	render () {		
 		this.props.reference.me = this;
		let itemStyle = "";
		this.data = this.props.data ;
		this.index = this.props.index;
		
		if( this.data.selected == true ) {
				itemStyle = this.STYLE_ITEM_SELECTED;
		} else {
				itemStyle = this.STYLE_ITEM_UNSELECTED
		}

		return (
			<div  ref={this.ref} className={itemStyle} 
					data-index={this.index} 
					data-value={this.data.value} 
					data-label={this.data.label}
					data-selected={this.data.selected}
					onClick={this.__optionSelected}  
					>

					{this.data.label} 
				</div>
			);
		
	}	
}

export default CoolDropdownItem;


import React, { Component } from 'react';

import SwitchToggle from "../ui/switch_toggle"


 
class ChartToggles extends Component {

	__toggled = ( name, isOn ) => {
		//console.log("Toggling... " + name + " isOn->" + isOn );
		if( this.props.toggleCallback != undefined ) {
			this.props.toggleCallback ( name, isOn );
		}
	}


	shouldComponentUpdate(props, states ) {
		//console.log("ChartToggles.shouldComponentUpdate()");
		return true;
	}
	render() {
		 
		return (
			<div  className="chart-toggles" >
				<div className="toggle-field" >
					<div className="field-label">North:</div>
					<div className="field-switch">
						<SwitchToggle color="#51BAF2"   isOn={true} name="north"  toggleCallback={this.__toggled} />
					</div>
				</div>

				<div className="toggle-field" >
					<div className="field-label">East:</div>
					<div className="field-switch">
						<SwitchToggle color="#71CA58"  isOn={true} 
							name="east"  toggleCallback={this.__toggled}
						/>
					</div>
				</div>

				<div className="toggle-field" >
					<div className="field-label">South:</div>
					<div className="field-switch">
						<SwitchToggle color="#F7A650"  isOn={true} 
							name="south"  toggleCallback={this.__toggled}
						/>
					</div>
				</div>

				<div className="toggle-field" >
					<div className="field-label">West:</div>
					<div className="field-switch">
						<SwitchToggle color="#D08CE0"  isOn={true} 
							name="west"  toggleCallback={this.__toggled}
						/>
					</div>
				</div>

					<div className="toggle-field" >
					<div className="field-label">Central:</div>
					<div className="field-switch">
						<SwitchToggle color="#138897"  isOn={true} 
							name="central"  toggleCallback={this.__toggled}
						/>
					</div>
				</div>

				<div className="toggle-field" >
					<div className="field-label">National:</div>
					<div className="field-switch">
						<SwitchToggle color="#FD6461"  isOn={true} 
							name="national"  toggleCallback={this.__toggled}
						/>
					</div>
				</div>
				


			</div>
		);
	}
}
export default ChartToggles;
import React, { Component } from 'react';
import { modal, modalHidden ,modalContent, modalHeader, close } from '../styles/javascript/RsvpModalStyles';

class RsvpModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const modalStyle = this.props.visible ? modal : modalHidden;
		return(
			<div style={modalStyle}>
			  <div style={modalContent}>
		      <div style={modalHeader}>
			    <span stlye={close} onClick={this.props.onCloseClick}>&times;</span>
			    <h2>Modal Header</h2>
			  </div>
			  <div ><p>Hello Modal</p></div>
			  </div>	
			</div>
		);
	}
}

export default RsvpModal;
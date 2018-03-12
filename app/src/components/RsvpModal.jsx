import React, { Component } from 'react';
import { modal, modalHidden ,modalContent, modalHeader, headerText, closeModal } from '../styles/javascript/RsvpModalStyles';

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
			      <p style={headerText}>RSVP to this location</p>
			      <div onClick={this.props.onCloseClick}><span>&times;</span></div>
			    </div>
			    <div><p>Hello Modal</p></div>
			  </div>	
			</div>
		);
	}
}

export default RsvpModal;
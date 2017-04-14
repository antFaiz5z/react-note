"use strict";
import React, { Component, PropTypes } from "react";

class Notes_header extends React.Component{
	render(){
		return(
			<div className="header">
				<div className="header_main">
					<h2>React Blog System</h2>
					<input type="button" value="新增博客" className="add_note_btn" onClick={ this.props.onToggleForm }/>
				</div>
			</div>
		);
	}
}

Notes_header.propTypes = {
	onToggleForm : PropTypes.func.isRequired
}

export default Notes_header;
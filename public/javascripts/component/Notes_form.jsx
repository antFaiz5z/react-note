"use strict";
import React, { Component, PropTypes } from "react";
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Modal from 'react-bootstrap/lib/Modal';

class Notes_form extends React.Component{

	handleSubmit(event){
		event.preventDefault();
		if(this.refs.title.value=="") return;
		var newNote={
			title : this.refs.title.value,
			description : this.refs.description.value,
			date : "posted @"+new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
		};
		this.refs.yout_form.reset();
		this.props.onNewNote(newNote);
	}

	render(){
		var style={
			display : this.props.formDisplayed ? "block" : "none"
		};
		return(
			<Modal show={this.props.formDisplayed} onHide={this.props.onToggleForm}>
				<Modal.Header closeButton>
					<Modal.Title>添加博客</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<form ref="yout_form" action="#" className="note_form" style={ style }
						  onSubmit={ this.handleSubmit.bind(this) }>
						<Grid>
							<Row>
								<Col componentClass={ControlLabel} sm={1}>
									标题
								</Col>
								<Col sm={4} md={8}>
									<input ref="title" type="text" className="your_title" placeholder="博客标题"/>
								</Col>
							</Row>
							<Row>
								<Col componentClass={ControlLabel} sm={1}>
									正文
								</Col>
								<Col sm={4} md={8}>
									<textarea ref="description" className="your_description" placeholder="博客内容"/>
								</Col>
							</Row>
							<Row>
								<Col smOffset={1} sm={1}>
									<Button type="submit" bsStyle="primary" onClick={this.props.onToggleForm}>确认</Button>
								</Col>
							</Row>
						</Grid>
					</form>

				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onToggleForm}>关闭</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

Notes_form.propTypes = {
	onToggleForm : PropTypes.func.isRequired,
	formDisplayed : PropTypes.bool.isRequired,
	onNewNote : PropTypes.func.isRequired
};

export default Notes_form; 
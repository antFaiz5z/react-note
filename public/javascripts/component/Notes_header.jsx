"use strict";
import React, { Component, PropTypes } from "react";
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class Notes_header extends React.Component{
	render(){
		return(
			<div>
				<Grid>
					<Row>
						<Jumbotron>
							<h1>响应式博客日志系统</h1>
							<p>这是一个用react、redux、bootstrap、webpack搭建的响应式博客日志系统，你可以点击下面的按钮来新增博客，或者点击删除按钮删除相应博客。</p>
							<p><Button bsStyle="primary" onClick={ this.props.onToggleForm }>新增博客</Button></p>
						</Jumbotron>

					</Row>
				</Grid>
			</div>
		);
	}
}

Notes_header.propTypes = {
	onToggleForm : PropTypes.func.isRequired
};

export default Notes_header;
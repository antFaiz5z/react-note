"use strict";
import React, {Component, PropTypes} from "react";
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Accordion from 'react-bootstrap/lib/Accordion';
import Button from 'react-bootstrap/lib/Button';

class Notes_item extends React.Component {

    handleOver() {
        this.refs.delete.style.display = "block";
    }

    handleOut() {
        this.refs.delete.style.display = "none";
    }

    handleDelete() {
        var date = this.props.date;
        this.props.onDeleteNote(date);
    }

    render() {
        return (

            <Col sm={6}>
                <Accordion>
                    <Panel bsStyle="primary" header={ this.props.title } footer={this.props.date}>
                        { this.props.description }
                        <Button className="delete" bsStyle="info" bsSize="small" onClick={ this.handleDelete.bind(this) }>X</Button>
                    </Panel>
                </Accordion>
            </Col>
        );
    }
}

Notes_item.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    onDeleteNote: PropTypes.func.isRequired
};

export default Notes_item;
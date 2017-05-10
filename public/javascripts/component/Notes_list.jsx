"use strict";
import React, {Component, PropTypes} from "react";
import Notes_item from "./Notes_item.jsx";
//import ReactCSSTransitionGroup from "react-addons-css-transition-group";
//import "../../stylesheets/transition.scss";
//import Accordion from 'react-bootstrap/lib/Accordion';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

class Notes_list extends React.Component {
    render() {
        var notes = this.props.notes;
        var notes_items = notes.map((note, index) => {
            return <Notes_item key={ index } title={ note.title } description={ note.description }
                               date={ note.date } onDeleteNote={ this.props.onDeleteNote }/>;
        });
        return (
            <Grid>
                <Row>

                        { notes_items }

                </Row>
            </Grid>
        );
    }
}

Notes_list.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default Notes_list;
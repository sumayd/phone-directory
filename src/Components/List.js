import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './List.css';

class List extends Component {
    static propTypes ={
        contacts: PropTypes.array.isRequired,
    };
    render() {
        return (
            <div className={"lisContent"}>
                <h1>Phone Directory</h1>
                <div className={"personFiltre"}>
                    <input name={"filter"} id={"filter"} placeholder={"Search"}/>
                    <ul className={"personList"}>
                        {this.props.contacts.map( contact =>
                                <li key={contact.phone}>
                                    <span className={"name"}>{contact.name}</span>
                                    <span className={"phone"}>{contact.phone}</span>
                                </li>  
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default List

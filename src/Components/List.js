import React, { Component } from 'react'

import './List.css';

class List extends Component {
    state = {
        filterText: ''
    }; 

    onChangeFilterText = (e) =>{
        this.setState({
            filterText: e.target.value
        })
    };
    render() {
        const filteredContacts = this.props.contacts.filter(
            contact =>{
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        );
        return (
            <div className={"listContent"}>
                <h1>Phone Directory</h1>
                <div className={"personFiltre"}>
                    <input 
                    value={this.state.filterText}
                    onChange={this.onChangeFilterText}
                    name={"filter"} 
                    id={"filter"} 
                    placeholder={"Search"}/>

                    <ul className={"personList"}>
                        {filteredContacts.map( contact =>
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

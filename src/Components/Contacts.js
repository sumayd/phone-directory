import React, { Component } from 'react'
import List from './List';
import Form from './Form';

class Contacts extends Component {
   state = {
       
   };

    render() {
        return (
            <div>
                <List/>
                <Form/>
            </div>
        )
    }
}

export default Contacts

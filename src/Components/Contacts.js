import React, { Component } from 'react'
import List from './List';
import Form from './Form';

class Contacts extends Component {
   state = {
    contacts:[{
        name:'John Stone',
        phone:'0000000000'
       },{
        name:'Ponnappa Priya',
        phone:'0000000000'
       },{
        name:'Mia Wong',
        phone:'0000000000'
    }]
   };

    render() {
        return (
            <div>
                <List contacts={this.state.contacts}/>
                <Form/>
            </div>
        )
    }
}

export default Contacts

import { Component } from 'react';
import '../App.css';
import Contacts from './Contacts';

class App extends Component{
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contacts:[{
        name:'John Stone',
        phone:'0000000000'
       },{
        name:'Ponnappa Priya',
        phone:'0000000001'
       },{
        name:'Mia Wong',
        phone:'00000000011'
    }]
   };
   addContact(contact){
     const { contacts } = this.state;
     contacts.push(contact);

     this.setState({
       contacts
     });
   }

   render(){
    return (
      <div className="App">
        <Contacts 
        addContact={this.addContact}
        contacts={this.state.contacts} />
      </div>
    );
   }
}



export default App;

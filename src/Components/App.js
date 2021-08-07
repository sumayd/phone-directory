import { Component } from 'react';
import '../App.css';
import Contacts from './Contacts';

class App extends Component{
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
   render(){
    return (
      <div className="App">
        <Contacts contacts={this.state.contacts} />
      </div>
    );
   }
}



export default App;

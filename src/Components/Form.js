import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Form.css';
class Form extends Component {
    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    static propTypes = {
        addContact: PropTypes.func
    };

    state = {
        name: '',
        phone: '',
        error: ''
    };

    onChange(e){

        const { name, value } = e.target;
        
        if (name === 'phone') {
            const numericValue = value.replace(/[^0-9]/g, '');
            if (numericValue.length > 10) return;
            this.setState({
                [name]: numericValue,
                error: ''
            });
        } else {
            this.setState({
                [name]: value,
                error: ''
            });
        }

        
    }

    onSubmit(e){
        e.preventDefault();
        const { name, phone } = this.state;
        if (phone.length !== 10) {
            this.setState({ error: 'Phone number must be exactly 10 characters.' });
            return;
        }

        this.props.addContact({
           ...this.state 
        });
        this.setState({
            name: '',
            phone: '',
            error: ''
        })
    }
    render() {
        return (
            <div className="phoneForm">
                <form onSubmit={this.onSubmit}>
                    <input 
                    name="name" 
                    id="name" 
                    value={this.state.name} 
                    onChange={this.onChange} 
                    placeholder="Enter a name"/>
                    <br/>
                    <label>
                    <span>Phone:</span>
                    <input 
                    name="phone" 
                    id="phone" 
                    value={this.state.phone} 
                    onChange={this.onChange} 
                    placeholder="(xxx) xxx-xxxx"/>
                    </label>
                    <br/>
                    <button>Add</button>
                </form>
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
            </div>
        )
    }
}

export default Form

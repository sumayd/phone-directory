import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div className="phoneForm">
                <form>
                    <input name="name" id="name" placeholder="Enter a name"/>
                    <br/>
                    <input name="phone" id="phone" placeholder="Enter a phone"/>
                    <br/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Form

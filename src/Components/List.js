import React, { Component } from 'react'
import './List.css';

class List extends Component {
    render() {
        return (
            <div className={"lisContent"}>
                <h1>Phone Directory</h1>
                <div className={"personFiltre"}>
                    <input name={"filter"} id={"filter"} placeholder={"Search"}/>
                    <ul className={"personList"}>
                        <li>
                            <span className={"name"}>John Stone</span>
                            <span className={"phone"}>0000000000</span>
                        </li>
                        <li>
                            <span className={"name"}>Ponnappa Priya</span>
                            <span className={"phone"}>0000000000</span>
                        </li>
                        <li>
                            <span className={"name"}>Mia Wong</span>
                            <span className={"phone"}>0000000000</span>
                        </li>
                        <li>
                            <span className={"name"}>Jane Meldrum</span>
                            <span className={"phone"}>0000000000</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default List

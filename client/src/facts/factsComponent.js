import React, { Component } from 'react'
import "./factsComponent.css"

class Facts extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='facts'>
                <h1>
                    {this.props.factsTitle}
                </h1>
                <text>
                    {this.props.factsText}
                </text>
            </div>
        )
    }  
}

export default Facts;
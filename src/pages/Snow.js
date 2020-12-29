import React, { Component } from 'react'

export default class Snow extends Component{
    constructor(props){
        super(props)
        const coord = this.props.coord
        this.state = {
            x: coord.x,
            y: coord.y,
        }
        
    }
    render(){
        
        return(
            <div style={
                {         
                 left: this.state.x,
                 top: this.state.y
                }
            } id={this.state.x}
            className={"snow"}></div>
        )
    }
}
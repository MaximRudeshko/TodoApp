import React from 'react'

import './list-item.css'

export default class ListItem extends React.Component{
    constructor(){
        super()

        this.onLabelClick = () => {
            console.log(this.props.label)
        }
    }
    

    render(){
       const {label, important = false} = this.props;

       const style = {
        color: important ? 'red' : 'black'
    }

       return (
            <div className="d-flex justify-content-between">
                <span style = {style}
                      onClick = {this.onLabelClick}
                      >{label}</span>
                <div className = 'list-item-btns'>
                    <button className="btn-outline-success btn-sm">
                        <i className="fa fa-exclamation"></i>
                    </button>
                    <button className="btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        )
    }
}


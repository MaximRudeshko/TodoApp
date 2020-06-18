import React from 'react'

import './list-item.css'

export default class ListItem extends React.Component{
    constructor(){
        super();
        this.state = {
            done: false,
            important: false
        }
    }
    

    render(){
       const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

       let classNames = 'd-flex justify-content-between';

       if(done){
           classNames += ' done'
       }

       if(important){
           classNames += ' important'
       }

       return (
            <div className={classNames}>
                <span onClick = {onToggleDone}
                      >{label}</span>
                <div className = 'list-item-btns'>
                    <button 
                    onClick = {onToggleImportant}
                    className="btn-outline-success btn-sm">
                        <i className="fa fa-exclamation"
                        onClick = {this.onMarkImportantClick}></i>
                    </button>
                    <button
                        onClick = {onDeleted}
                        className="btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        )
    }
}


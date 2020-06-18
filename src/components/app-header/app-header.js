import React, { Component } from 'react';

import './app-header.css'

export default class AppHeadet extends Component{
    render(){
        const {toDo, done} = this.props;
        return (
            <div className = 'app-header d-flex justify-content-between'>
                <h1 className="col-md-6">My Todo List</h1>
                <span>{toDo} more to do, {done} done</span>
            </div>
        )
    }
}


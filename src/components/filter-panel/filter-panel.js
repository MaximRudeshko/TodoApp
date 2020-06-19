import React, {Component} from 'react'

import './filter-panel.css'

export default class FilterPanel extends Component{
        buttons = [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'done', label: 'Done'}
        ]
    

    render(){

        const buttons = this.buttons.map(item => {
            const isActive = this.props.filter === item.name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return(
            <button
            key = {item.name}
            type = "button"
            className = {`btn ${clazz}`}
            onClick = {() => this.props.onFilterChange(item.name)}>
                {item.label}
            </button>
            )
        })
        return (
            <div className="col-md-3 d-flex p-0 ml-1">
                {buttons}
            </div>
        )
    }
}


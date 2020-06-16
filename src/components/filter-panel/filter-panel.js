import React, {Component} from 'react'

import './filter-panel.css'

export default class FilterPanel extends Component{
    render(){
        return (
            <div className="col-md-3 d-flex p-0 ml-1">
                <button className = 'btn btn-primary col-md-4' type = 'button'>
                 All
                </button>
                <button className = 'btn btn-secondary col-md-4' type = 'button'>
                 Active
                </button>
                <button className = 'btn btn-success col-md-4' type = 'button'>
                 Done
                </button>
            </div>
        )
    }
}


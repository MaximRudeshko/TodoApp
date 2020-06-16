import React from 'react'

import './list-item.css'

const ListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'red' : 'black'
    }

    return (
        <div className="d-flex justify-content-between">
            <span style = {style}>{label}</span>
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

export default ListItem
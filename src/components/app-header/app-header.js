import React from 'react';

import './app-header.css'

const AppHeader = () => {
    return (
        <div className = 'app-header d-flex justify-content-between'>
            <h1 className="col-md-6">My Todo List</h1>
            <span>1 more to do, 3 done</span>
        </div>
    )
}

export default AppHeader
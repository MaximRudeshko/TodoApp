import React,{Component} from 'react';

export default class AddItemsPanel extends Component{
/*     constructor(){
        super();
    } */

    render(){
        const {addItem} = this.props;
        return(
            <div className="d-flex">
                <input placeholder = 'Type you case here' className= 'col-md-9 form-control search-panel'/>
                <button className='col-md-3 ml-1 btn btn-danger'
                 onClick = {addItem}>Add</button>
            </div>
        )
    }
}
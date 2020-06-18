import React,{Component} from 'react';

export default class AddItemsPanel extends Component{
     constructor(){
        super();
        this.state = {
            label: ''
        }
    } 

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
           })
    }

    onLabelSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label);
        this.setState({label: ''})
    }


    render(){
        return(
            <form 
            onSubmit = {this.onLabelSubmit}
            className="d-flex">
                <input
                value = {this.state.label}
                onChange = {this.onLabelChange}
                placeholder = 'Type you case here' className= 'col-md-9 form-control search-panel'/>
                <button className='col-md-3 ml-1 btn btn-danger'>Add</button>
            </form>
        )
    }
}
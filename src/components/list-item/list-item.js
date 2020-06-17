import React from 'react'

import './list-item.css'

export default class ListItem extends React.Component{
    constructor(){
        super();
        this.state = {
            done: false,
            important: false
        }

        this.onLabelClick = () => {
            this.setState(({done}) => {
                return{
                    done : !done
                }  
            })
        }

        this.onMarkImportantClick = () => {
            this.setState(({important}) => {
                return{
                    important:!important
                }
            })
        }
    }
    

    render(){
       const {label, onDeleted} = this.props;

       const {done, important} = this.state;

       let classNames = 'd-flex justify-content-between';

       if(done){
           classNames += ' done'
       }

       if(important){
           classNames += ' important'
       }

       return (
            <div className={classNames}>
                <span onClick = {this.onLabelClick}
                      >{label}</span>
                <div className = 'list-item-btns'>
                    <button className="btn-outline-success btn-sm">
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


import React, { Component } from 'react';
import {EditBtn} from './button'
import EditCard from './edit';
import ModalPopup from './modalPopup';

class Grid extends Component {
    constructor(props){
        super(props)
    }
    state = {
        isEditGrid: false,
        goingToEditData: []
    }
    
    editAddUser = (data)=>{
        console.log(data);
        this.setState({...this.state, isEditGrid: true, goingToEditData: data} )
    }
    closePopup = () => {
        this.setState({...this.state, isEditGrid: false, goingToEditData: ''} )
    }
    saveDetails = ()=>{
        // const userObj = this.props.data.filter((obj) => obj.id == this.state.id)
        // const index = this.props.data.indexOf(userObj)
        this.props.value.updateUser(this.state)
        //console.log('index', index);
    }
    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({
            ...this.state,
            // id: this.props.data.id,
            // image: this.props.data.image,
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log('data in grid',this.state.goingToEditData);
        return (
            <>      
                {this.state.isEditGrid ? <ModalPopup data = {this.state.goingToEditData} 
                closePopup = {this.closePopup}
                saveDetails = {() => {this.saveDetails()}}
                handleChange = {(e)=>this.handleChange(e)}
                /> : null}      
                <div className='main_grid'>
                    <p className='para_id'>ID: {this.props.data.id}</p>
                    <p className='para_name'>Name: <span className='span'>{this.props.data.name}</span></p>
                    {/* <p className='para'></p> */}
                    <p className='para_head'>Email : <span className='span'>{this.props.data.email}</span></p>
                    {/* <p className='para'></p> */}
                    <p className='para_head'>Gender: <span className='span'>{this.props.data.Gender}</span></p>
                    <p className='para'>{this.props.data.status}</p>
                    <EditBtn editUser={() => { this.editAddUser(this.props.data)}}/>
                </div> 
            </>
        );
    }
}

export default Grid;
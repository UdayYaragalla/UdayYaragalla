import React, { Component } from "react";

class AddContact extends Component{
    render(){
        return(
            <div className="ui form">
                <h2>Add Contact</h2>
                <form>
                    <div className="field">
                    <label>Name : </label>
                    <input type="text" placeholder="Enter Name"/>
                    </div>
                    <div className="field">
                    <label>Email : </label>
                    <input type="email" placeholder="Enter Email"/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact
import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DJar from "./DJar";

class Home extends Component {
    state=
    {
        name:"",
        reDirect: false
    }
    // inputHandler = (e) => {
        // let updatedName = e.target.value;//in updateName variable it will take input value from textbox
        // this.setState({ name: updatedName });//set name value using setState value assign is updatedName 
        //console.log(updatedName);  
    //   }

      onSubmitHandler = (e) => {
        e.preventDefault();
        let updatedName = e.target.elements.value;
        console.log(updatedName);
        this.setState({
            name: updatedName,
            reDirect: true
        })
        //console.log(this.setState.reDirect);
      }
render()
{
  return (
    <div className="Home">
      <form onSubmit={this.onSubmitHandler}>
      <input type="text" name="uname" placeholder="Enter Your Name"></input>
      <button type="submit" onClick={this.onSubmitHandler}>Submit</button>
      {/* {this.state.showName && <p>"Name: " {this.state.name}</p>} */}
      </form>
    </div>
  );//onChange={this.inputHandler} its for the whatever you type in tetbox and {this.state.name} this for the take value from state name and set value of textbox;
    }
}

export default Home;

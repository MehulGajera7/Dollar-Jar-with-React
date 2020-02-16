import React, { Component } from "react";
import DJar from "./DJar";
import {Link} from "react-router-dom";

class HomePage extends Component {

    state = {
        name: "",
    }

    submitChnage = (e) => {
        e.preventDefault();
        const name = e.target.value;
        //console.log(name);
        this.setState({
             name: name,
        })
    }

    render() {
        console.log(this.state.name);
        return (
                        <div className="home">
                                <input type="text" onChange={this.submitChnage} placeholder="Enter Your Name"  value={this.state.name} name="name"/>
                                <br />
                                <Link to={{pathname:'/djar' , uname:this.state.name}}>
                                <button name="enter" type="submit">Submit</button>
                                </Link>
                                {<p>"Name: " {this.state.name}</p>}
                        </div>
        )
    }
}

export default HomePage;
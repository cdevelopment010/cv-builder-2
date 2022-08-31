import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Home extends Component {


    render() {
        return(
            <div>
                <Navigation />
                <h1>Welcome to The Odin Project CV Builder</h1>
                <p>This cv builder uses react router dom to navigate between different sections.</p>
                <p>Please click the link below to get started.</p>
                <Link to="/personalInfo">Personal Information</Link>
            </div>
        )
    }
}

export default Home;
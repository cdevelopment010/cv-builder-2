import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Education extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>Education Information</h2>

                <div className="render-section">

                </div>
                <div className="input-section">

                </div>

                <div className="btn-group">
                    <Link to="/personalInfo">Previous Section</Link>
                    <Link to="/career">Next Section</Link>
                </div>
            </div>
        )
    }
}

export default Education;
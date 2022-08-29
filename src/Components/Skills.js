import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Skills extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>Skills</h2>

                <div className="render-section">

                </div>
                <div className="input-section">

                </div>

                <div className="btn-group">
                    <Link to="/career">Previous Section</Link>
                    <Link to="/references">Next Section</Link>
                </div>
            </div>
        )
    }
}

export default Skills;
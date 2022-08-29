import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Career extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>Career Information</h2>

                <div className="render-section">

                </div>
                <div className="input-section">

                </div>

                <div className="btn-group">
                    <Link to="/education">Previous Section</Link>
                    <Link to="/skills">Next Section</Link>
                </div>
            </div>
        )
    }
}

export default Career;
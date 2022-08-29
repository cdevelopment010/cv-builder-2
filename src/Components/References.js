import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class References extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>References</h2>

                <div className="render-section">

                </div>
                <div className="input-section">

                </div>

                <div className="btn-group">
                    <Link to="/skills">Previous Section</Link>
                    <Link to="/aob">Next Section</Link>
                </div>
            </div>
        )
    }
}

export default References;
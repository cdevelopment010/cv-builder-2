import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class AOB extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>Extra</h2>

                <div className="render-section">

                </div>
                <div className="input-section">

                </div>

                <div className="btn-group">
                    <Link to="/references">Previous Section</Link>
                    <Link to="/documentStyle">Next Section</Link>
                </div>
            </div>
        )
    }
}

export default AOB;
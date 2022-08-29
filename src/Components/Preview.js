import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Preview extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>Preview</h2>

                <div className="render-section">

                </div>
                <div className="input-section">

                </div>

                <div className="btn-group">
                    <Link to="/documentStyle">Previous Section</Link>
                    <Link to="/">Home</Link>
                </div>
            </div>
        )
    }
}

export default Preview;
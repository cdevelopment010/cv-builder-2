import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class PersonalInfo extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <Navigation />
                <h2>Personal Information</h2>

                <div className="render-section">

                </div>
                <div className="input-section">
                    <input type='text' value={this.props.data.name} onChange={this.props.callback} id="personalInfo-name" placeholder="Name" autoComplete='off'/>
                    <input type='email' value={this.props.data.email} onChange={this.props.callback} id="personalInfo-email" placeholder="Email" autoComplete='off'/>
                    <input type='text' value={this.props.data.phone} onChange={this.props.callback} id="personalInfo-phone" placeholder="Phone" autoComplete='off'/>
                    {this.props.data.websites.map((site, index) => {
                        console.log(site);
                        return(
                        <input type='text' value={site} key={`website-${index}`} onChange={this.props.callback} id={`personalInfo-websites-${index}`} placeholder="website" autoComplete='off'/>
                        )
                    })}
                </div>

                <div className="btn-group">
                    <Link to="/">Previous Section</Link>
                    <Link to="/education">Next Section</Link>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;
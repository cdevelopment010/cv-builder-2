import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class PersonalInfo extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
        return(
            <div>
                <Navigation />
                <h2>Personal Information</h2>
                <hr />

                <div className="render-section grid-2-col">
                    <div>
                        <h1>{this.props.data.name}</h1>
                        <p>{this.props.data.email}</p>
                        <p>{this.props.data.phone}</p>
                    </div>
                    <div>
                    <ul>
                    {this.props.data.websites.map((site, index) => {
                        
                        return(
                            site !== '' ?
                            <li key={`website-line-${index}`}><a href={`https://${site}`} target="_blank" rel="noreferrer">{site}</a></li> :
                            <div></div>
                        )
                    })}
                    </ul>
                    </div>
                    <div className="grid-span-2">
                        <h3>About</h3>
                        <p>{this.props.data.about}</p>
                    </div>

                </div>

                <hr />

                <div className="input-section">
                    <input type='text' value={this.props.data.name} onChange={this.props.callback} id="personalInfo-name-input" placeholder="Name" autoComplete='off'/>
                    <input type='email' value={this.props.data.email} onChange={this.props.callback} id="personalInfo-email-input" placeholder="Email" autoComplete='off'/>
                    <input type='text' value={this.props.data.phone} onChange={this.props.callback} id="personalInfo-phone-input" placeholder="Phone" autoComplete='off'/>
                    {this.props.data.websites.map((site, index) => {
                        return(
                        <input type='text' value={site} key={`website-${index}`} onChange={this.props.callback} id={`personalInfo-websites-${index}-input`} placeholder="website" autoComplete='off'/>
                        )
                    })}
                    <button type="button"  id="personalInfo-websites-btn" onClick={this.props.newField}>Add Website</button>
                    <div>
                        <textarea placeholder="About text..." id="personalInfo-about-input" value={this.props.data.about} onChange={this.props.callback}></textarea>
                    </div>
                </div>

                <div className="btn-group">
                    <Link to="/">Previous Section</Link>
                    <Link to="/education">Next Section</Link>
                </div>

                <hr />
            </div>
        )
    }
}

export default PersonalInfo;
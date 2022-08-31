import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Skills extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>Skills</h2>
                <hr />
                <div className="render-section">
                    <ul>
                        {this.props.data.skills.map((skill, index) => {
                                return(
                                    skill !== '' ?
                                    <li key={`institue-${index}`}>
                                        {skill}
                                    </li> :
                                    <span></span>
                                )
                        })}
                    </ul>
                </div>
                <hr />
                <div className="input-section">
                {this.props.data.skills.map((skill, index) => {
                            return(
                                <div key={`institue-${index}`}>
                                    <input type="text" placeholder="skill..." onChange={this.props.callback} value={skill} id={`skillInfo-skills-${index}-input`}/> 
                                </div>
                            )
                })}
                <button type="button"  id="skillInfo-skills-btn" onClick={this.props.newField}>Add skill</button>
                </div>

                <div className="btn-group">
                    <Link to="/career">Previous Section</Link>
                    <Link to="/references">Next Section</Link>
                </div>
                <hr />
            </div>
        )
    }
}

export default Skills;
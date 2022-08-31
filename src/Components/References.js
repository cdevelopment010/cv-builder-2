import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class References extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>References</h2>
                <hr />

                <div className="render-section">
                    {this.props.data.reference.map((ref, index) => {
                            let contactInfo = '';
                            if(ref.email !== '' && ref.phone !== ''){
                                contactInfo = ref.email + " \u2014 " + ref.phone;
                            } else if (ref.email !== '') {
                                contactInfo = ref.email;
                            } else if (ref.phone !== ''){
                                contactInfo = ref.phone 
                            }
                                return(
                                    <div key={`reference-output-${index}`}>
                                        <h3>{ref.name}</h3>
                                        <p>{contactInfo}</p>
                                    </div>
                                )
                        })}
                </div>
                <hr />
                <div className="input-section">
                {this.props.data.reference.map((ref, index) => {
                            return(
                                <div key={`reference-${index}`}>
                                    <input type="text" placeholder="Name" onChange={this.props.callback} value={ref.name} id={`referenceInfo-reference-${index}-name-input`}/> 
                                    <input type="email" placeholder="Email" onChange={this.props.callback} value={ref.email} id={`referenceInfo-reference-${index}-email-input`}/> 
                                    <input type="email" placeholder="Phone" onChange={this.props.callback} value={ref.phone} id={`referenceInfo-reference-${index}-phone-input`}/> 
                                </div>
                            )
                })}
                <button type="button"  id="referenceInfo-reference-btn" onClick={this.props.newField}>Add Reference</button>
                </div>

                <div className="btn-group">
                    <Link to="/skills">Previous Section</Link>
                    <Link to="/aob">Next Section</Link>
                </div>
                
                <hr />
            </div>
        )
    }
}

export default References;
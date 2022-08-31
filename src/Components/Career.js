import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Career extends Component {

    render() {
        return(
            <div>
                <Navigation />
                <h2>Career Information</h2>
                <hr />

                <div className="render-section">
                {this.props.data.career.map((car, index) => {

                            let dateRange =''; 
                            if(car.from !== '' && car.to !== '') {
                                dateRange = car.from + " - " + car.to
                            } else if (car.from !== '') {
                                dateRange = car.from + " - present";   
                            } 

                            return(
                                <div key={`institue-${index}`}>
                                    <div>
                                        <h3>{car.title}</h3>
                                        <p>{car.company}</p>
                                    </div>
                                    <div>
                                        <p>{dateRange}</p>
                                    </div>
                                    <div>{car.overview}</div>
                                </div>

                            )
                })}

                </div>
                <hr />
                <div className="input-section">
                    {this.props.data.career.map((car, index) => {
                            return(
                                <div key={`institue-${index}`}>
                                    <input type="text" placeholder="Job Title" value={car.title} onChange={this.props.callback} id={`careerInfo-career-${index}-title-input`}/>
                                    <input type="text" placeholder="Company" value={car.company} onChange={this.props.callback} id={`careerInfo-career-${index}-company-input`}/>
                                    <input type="text" placeholder="From:" value={car.from} onChange={this.props.callback} id={`careerInfo-career-${index}-from-input`}/>
                                    <input type="text" placeholder="To:" value={car.to} onChange={this.props.callback} id={`careerInfo-career-${index}-to-input`}/>
                                    <textarea placeholder="Career overview" value={car.overview} onChange={this.props.callback} id={`careerInfo-career-${index}-overview-input`}/>
                                </div>
                            )
                    })}
                    <button type="button"  id="careerInfo-career-btn" onClick={this.props.newField}>Add Job</button>
                </div>

                <div className="btn-group">
                    <Link to="/education">Previous Section</Link>
                    <Link to="/skills">Next Section</Link>
                </div>
                <hr />
            </div>
        )
    }
}

export default Career;
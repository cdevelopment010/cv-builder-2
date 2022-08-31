import React, { Component } from 'react'; 
import {Link} from "react-router-dom";
import Navigation from './Navigation';

class Education extends Component {

    render() {

        return(
            <div>
                <Navigation />
                <h2>Education Information</h2>
                <hr />

                <div className="render-section">
                        {this.props.data.institute.map((ins, index) => {

                            let subjectGrade =''; 
                            if(ins.areaStudy !== '' && ins.grade !== '') {
                                subjectGrade = ins.areaStudy + " - " + ins.grade
                            } else if (ins.areaStudy !== '') {
                                subjectGrade = ins.areaStudy; 
                            } else {
                                subjectGrade = ins.grade;
                            }

                            let dateRange =''; 
                            if(ins.from !== '' && ins.to !== '') {
                                dateRange = ins.from + " - " + ins.to
                            } else if (ins.from !== '') {
                                dateRange = ins.from + " - present";   
                            } 

                            return(
                            <div key={`institue-output-${index}`}>
                                <div>
                                    <h3>{ins.school}</h3>
                                    <p>{subjectGrade}</p>
                                </div>
                                <div>
                                    <p>{dateRange}</p>
                                </div>
                                <div>{ins.overview}</div>
                            </div>
                            )
                        })}
                </div>
                <hr />
                <div className="input-section">
                    {this.props.data.institute.map((ins, index) => {
                        return(
                            <div key={`institue-${index}`}>
                                <input type="text" placeholder="Institute" value={ins.school} onChange={this.props.callback} id={`educationInfo-institute-${index}-school-input`}/>
                                <input type="text" placeholder="From:" value={ins.from} onChange={this.props.callback} id={`educationInfo-institute-${index}-from-input`}/>
                                <input type="text" placeholder="To:" value={ins.to} onChange={this.props.callback} id={`educationInfo-institute-${index}-to-input`}/>
                                <input type="text" placeholder="Subject" value={ins.areaStudy} onChange={this.props.callback} id={`educationInfo-institute-${index}-areaStudy-input`}/>
                                <input type="text" placeholder="Grade" value={ins.grade} onChange={this.props.callback} id={`educationInfo-institute-${index}-grade-input`}/>
                                <textarea placeholder="Course overview" value={ins.overview} onChange={this.props.callback} id={`educationInfo-institute-${index}-overview-input`}/>
                            </div>
                        )
                    })}
                    <button type="button"  id="educationInfo-institute-btn" onClick={this.props.newField}>Add Education</button>
                </div>

                <div className="btn-group">
                    <Link to="/personalInfo">Previous Section</Link>
                    <Link to="/career">Next Section</Link>
                </div>

                <hr />
            </div>
        )
    }
}

export default Education;
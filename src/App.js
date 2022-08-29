import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

import Home from './Components/Home';
import PersonalInfo from './Components/PersonalInfo';
import Education from './Components/Education';
import Career from './Components/Career';
import Skills from './Components/Skills';
import References from './Components/References';
import AOB from './Components/AOB';
import DocumentStyle from './Components/DocumentStyle';
import Preview from './Components/Preview';

class App extends React.Component {

  constructor() {
    super(); 

    this.state = {
      personalInfo: {
        name: '', 
        email: '',
        phone: '', 
        websites: [''],
        about: ''
      }
    }

    this.updateInfo = this.updateInfo.bind(this); 

  }

  updateInfo( e ) {
    let area = e.target.id.split("-")[0];
    let variable = e.target.id.split("-")[1];

    let previousState = this.state[area]; 
    
    if(e.target.id.split("-").length > 2){
      let index = e.target.id.split("-")[2]; 
      console.log(previousState[variable]);
      previousState[variable][index]= e.target.value;

    } else {
      previousState[variable]= e.target.value;
    }




    this.setState({
      [area]: previousState
    })
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/personalInfo' element={<PersonalInfo data={this.state.personalInfo} callback={this.updateInfo}/>} />
            <Route path='/education' element={<Education />} />
            <Route path='/career' element={<Career />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/references' element={<References />} />
            <Route path='/AOB' element={<AOB />} />
            <Route path='/documentStyle' element={<DocumentStyle />} />
            <Route path='/preview' element={<Preview />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    );
  }

  
}

export default App;

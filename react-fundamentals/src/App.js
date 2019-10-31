import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Sidebar from './components/site/Sidebar'
import {
  BrowserRouter as Router,
} from 'react-router-dom'            //how to change the name of specific imports



const App = () => {
    return (
      <div>
        <Header />
        <Router>
          <Sidebar />
        </Router>
        <Footer />
      </div> 
  )
}

export default App;


//header will not be affected by route changes at all bc outside of router
//for React Router to work, must be wrapped in a Router!
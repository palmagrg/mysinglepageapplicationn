import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; 
import AboutPage from './components/AboutPage';
import AjaxCall from './components/AjaxCall';





class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      title: 'Garrett Love',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        
     
      ],
      home: {
        title: 'My Blog',
        subTitle: 'Projects the make a difference',
        
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
      
    }
  }
  
  
  
  
  
  render(){
    return (
      <Router>
        <Container className="p-0" fluid={true}> 

        <Navbar className="border-bottom" pg="transparent" expand="lg">
          <Navbar.Brand>Fashion Blog</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                
                <Link className="nav-link" to="/contact">API</Link>
                

          
              </Nav>
          
          </Navbar.Collapse>
          



        </Navbar>

        
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
        <Route path="/contact" exact render={() => <AjaxCall title={this.state.contact.title}/>}/>
       
        

        
        <Footer />
        

        </Container>

      </Router>
    );
  }
}

export default App;

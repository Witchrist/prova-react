import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";

import Footer from './components/template/footer/footer';
import Sidebar from './components/template/sidebar/Sidebar';
import Header from './components/template/header/Header'

function App() {
  return (
    <>
      <Router>
        <Routes/>
        <Sidebar/>
      <Header/>
      <div className="container-fluid content-top-gaps">
        
      <Footer/>
      </div>
      </Router>
    </>
  );
}

export default App;



import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Chatbox from "./components/Chatbox"
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="date"></div>
      <div>
        <div className="main-interface">
          < Header />
          < Chatbox />
        </div>
      </div>
    </div>


  );
}




// const ytb = ({ embedId }) => (

// );

// ytb.propTypes = {
//   embedId: PropTypes.string.isRequired
// };


// setInterval(() => {
//   let date = new Date();

//   document.getElementsByClassName('date')[0].innerHTML = date + "\n";

// }, 1000);


export default App;

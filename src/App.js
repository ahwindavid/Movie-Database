import React, { useState } from "react"
import axios from "axios"



import Search from "./components/Search"
import Results from './components/Results'
import Popup from './components/Popup'

import "./App.css";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const APP_KEY = "dd39a381";
  const apiurl = "   http://www.omdbapi.com/?apikey=dd39a381";

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(apiurl + "&s=" + state.s).then(({data}) => {
        let results = data.Search

        setState(prevState => {
          return{...prevState, results: results}
        })
      });
    }
  };

  const inputSearch = event => {
    let s = event.target.value;

    setState(prevState => {
      return { ...prevState, s: s };
    });
  };




  const openPopup = id =>{
    axios.get(apiurl + '&i=' + id).then(({data})=>{
      let result = data

      setState(prevState=>{
        return {...prevState, selected: result}
      });
    });
  }


  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
        <main>
          <Search inputSearch={inputSearch} search = {search}/>
          <Results results={state.results} openPopup={openPopup}/>

          {(typeof state.selected.Title !== 'undefined') ? <Popup selected={state.selected} closePopup={closePopup}/> : false}
        </main>
      </header>
    </div>
  );
}

export default App;

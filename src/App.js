// src/App.js

import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterLoader from './CharacterLoader';
import SearchBox from './SearchBox';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState([]);
  const fetchData = () => {

    setLoading(true);

    axios
        .get('https://swapi.dev/api/people/?search='+search)
        .then((response => {
            setCharacters(response.data.results)
            setLoading(false)
        }))
        .catch((error) => {
            console.error(error);
            setLoading(false);
          });
  };
  return (
    <div className="App">
      <SearchBox  search={search} setSearch={setSearch} fetchData={fetchData}/>
      <CharacterLoader characters={characters} loading={loading} fetchData={fetchData}/>
    </div>
  );
}

export default App;




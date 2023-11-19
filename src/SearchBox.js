

import React from 'react';


function SearchBox({setSearch, search,fetchData}) {
  
  

  return (
    <div className='form-row'>
        <input type='text' onInput={(e) => {
            setSearch(e.target.value)
            fetchData()
        }} value={search}></input>
    </div>
  );
}

export default SearchBox;
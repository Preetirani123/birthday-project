import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, SetPeople] = useState(data)
  return (
    <>
    <h2>{people.length}Birthday Today</h2>
    <List people={people}/>
    <button onClick={() => SetPeople([])}>All Clear</button>
    </>
  );
}

export default App;

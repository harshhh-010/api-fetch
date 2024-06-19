import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
import './App.css';

function App() {
  const [data, setData] = useState([]);

// got data using Axios 

  // useEffect(() => { // useEffect Syntax = useEffect(<function>, <dependency>)
  //   axios.get('https://jsonplaceholder.typicode.com/posts') // to get API Data 
  //     .then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

//Get Data Using Fetch API
    useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data =>  setData(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);

  return (
    <div className="App">
      <h1>Posts Data</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;

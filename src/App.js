
import './App.css';
import axios from "axios";
import {useEffect,useState} from "react";


function App() {

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios("https://jsonplaceholder.typicode.com/todos");
      console.log(response);
      console.log(response.data);
      console.log(response.data[0].title);
    }

    sendRequest();

  }, [])
  




  return (
    <div className="App">
      
    </div>
  );
}

export default App;

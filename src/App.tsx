import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let valuedata = "https://engineering-task.elancoapps.com/api/resources";

  const [data, setData] = useState([]);
  const [valData, setValData] = useState(data);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(valuedata);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    setValData(data);
  }, []);

  let sortdata = () => {
    let val = data.sort();
    console.log(val, "value of data");
    setValData(val);
  };

  return (
    <div className="App">
      <ul>
        {valData.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button onClick={() => sortdata()}>Sort</button>
    </div>
  );
}

export default App;

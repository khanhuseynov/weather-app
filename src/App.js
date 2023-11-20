import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import City from "./City"; 

function App() {
  const key = "306450a95e9513a83046a1e4d75b12fd";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );

        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, [search]);
  console.log(search);

  return (
    <div>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="border-8 bg-slate-400"
        />
        
      </div>
      <City city={city}/>
      
    </div>
  );
}

export default App;

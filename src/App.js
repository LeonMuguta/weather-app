import { useState } from "react";

function App() {

  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [humidity, setHumidity] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    
    console.log(city);

    const apiKey = "35fddef663ffa4ffd6cba05a15448cf5";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=" + city + "&units=" + unit;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setName(data.name)
        setDescription(data.weather[0].description);
        setTemp(data.main.temp);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
        setHumidity(data.main.humidity);
        setIcon(data.weather[0].icon);
      });

  }

  return (
    <div className="App">
      <h1>Weather Update</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className="location" value={city} onChange={(e) => setCity(e.target.value)}/>
        <button className="search" type="submit">Search</button>
      </form>
      <hr />
      
      {
        name !== "" &&
        <div>
          <div className="results">
            <h3>Weather in: {name}</h3>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Pic" />
          </div>
          <div className="details">
            <h4>Temperature: {temp}° Celcius</h4>
            <p>Weather description: {description}</p>
            <p>Low: {tempMin}</p>
            <p>High: {tempMax}</p>
            <p>Humidity: {humidity}</p>
          </div>
        </div>
      }
      
    </div>
  );
}

export default App;

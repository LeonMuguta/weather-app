import { useState } from "react";

function App() {

  const [city, setCity] = useState("");

  // const handleSubmit = (e) = {
    
  // }

  return (
    <div className="App">
      <h1>Weather Update</h1>
      <form>
        <input type="text" className="location" value={city} onChange={(e) => setCity(e.target.value)}/>
        <button className="search" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;

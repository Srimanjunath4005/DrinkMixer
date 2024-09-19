import "./styles.css";
import { Component, ReactNode } from "react";

class App extends Component {
  state = { drinkslist: [] };

  apiurl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  getdata = async () => {
    res = await fetch(apiurl);
    data = await res.json();
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <div className="nav-cont">
          <p className="p-s">Home</p>
          <p className="p-s">Contact</p>
          <p className="p-s">About</p>
        </div>
        <h1>Drink Mixer</h1>
        <h2>Know About Your Drink</h2>

        <input type="search" placeholder="Search for Drink" />
      </div>
    );
  }
}

export default App;

import "./App.css";
import {Planets} from './Planets'

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  const isGreen = true;

  return (
    <div className="App">
      {planets.map(
        (planet, key) => !planet.isGasPlanet && <h1> {planet.name} </h1>
      )}
      {<hr />}
      {planets.map((planet, key) => {
        return <Planets name={planet.name} />
      })}
      {<hr />}
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h1> {planet.name} </h1>
      )}
      {isGreen && <button>Button</button>}
      {<br />}
    </div>
  );
}

export default App;

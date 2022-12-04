import art from './images/painting.jpg';
import './App.css';
import './css/card.css';

function App() {
  return (
    <div className="card">
      <img src={art} alt="painting pencil"></img>
      <h1 className="name">Carlos Ocampo</h1>
      <p className="description">
        I like Sketching<br></br>
        I play piano and guitar<br></br>
        Soccer is my favorite sport<br></br>
        I like learning new things<br></br>
      </p>
      
    </div>
  );
}

export default App;

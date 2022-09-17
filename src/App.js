import './App.css';
import Camera from './components/camera'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-heading'>
          How you feelin? 
        </h1>
      </header>
      <Camera></Camera>
      <p>
        Here goes bottom text
      </p>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Camera from './components/camera'
import { loadModels } from './components/utils/faceApi.js';

loadModels()
function App() {
  const [emotion,setEmotion] = useState('');
  function handleEmotion(emote)
  {
    setEmotion(emote)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-heading'>
          I miss us {emotion}
        </h1>
      </header>
      <Camera handleEmotion={handleEmotion}></Camera>
      
    </div>
  );
}

export default App;

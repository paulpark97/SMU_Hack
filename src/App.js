import './App.css';
import { useState, useEffect } from 'react';
import Camera from './components/camera'
import { loadModels } from './components/utils/faceApi';
import  emotionMap  from './components/utils/emotionMap';


loadModels()
function App() {
  const [emotion,setEmotion] = useState('');

  function handleEmotion(emote)
  {
    setEmotion(emote);
  }
  document.body.style.backgroundColor = (emotion !== '') ? emotionMap[emotion]:'pink';
  //document.body.style.transition =  'backgroundColor 0.5s ease-in-out';
  
  return (
    <div className="App" >
      <header className="App-header" >
        <h1 className='App-heading'>
          Vibe Check
        </h1>
      </header>
      <Camera handleEmotion={handleEmotion}></Camera>
      
    </div>
  );
}

export default App;

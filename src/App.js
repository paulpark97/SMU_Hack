import './App.css';
import { useState, useEffect } from 'react';
import Camera from './components/camera'
import { loadModels } from './components/utils/faceApi';
import  emotionMap  from './components/utils/emotionMap';
import Header from './components/header';
import About from './about';
import {Routes, Route} from 'react-router-dom';


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
      <Header/>
      <Camera handleEmotion={handleEmotion}></Camera>
    </div>
  );
}

export default App;

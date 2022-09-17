import './App.css';
import { useState,  } from 'react';
import Camera from './components/camera'
import { loadModels } from './components/utils/faceApi';
import  emotionMap  from './components/utils/emotionMap';

loadModels()
function App() {
  const [emotion,setEmotion] = useState('');

  //const emotionMap = {'angry':'red','disgustful':'brown','fearful':'purple','happy':'orange','neutral':'grey','sad':'blue'}
  function handleEmotion(emote)
  {
    setEmotion(emote)
  }
  
  return (
    <div className="App" style={{backgroundColor: emotion !== '' ? emotionMap[emotion]:'pink'}}>
      <header className="App-header" >
        <h1 className='App-heading'>
          I miss us {emotion}
        </h1>
      </header>
      <Camera handleEmotion={handleEmotion}></Camera>
      
    </div>
  );
}

export default App;

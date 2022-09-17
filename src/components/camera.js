import React, { useEffect, useState, useRef } from 'react';
import Webcam from "react-webcam";
import { detectFaces, drawResults} from './utils/faceApi';
import Results from './results';

const Camera = () => {
    const camera = useRef();
    const cameraCanvas = useRef();
    const [results,setResults] = useState([]);
    const getFaces = async () => {
        // check if the frame exists
        if (camera.current !== null) {
            // looks for the faces in the frame
            const seenFaces = await detectFaces(camera.current.video);
            await drawResults(camera.current.video, cameraCanvas.current,seenFaces,'box');
            setResults(seenFaces)
            console.log(seenFaces)
        }
    }
    useEffect(() => {
        // fetches faces in the frame every 50ms
        const interval = setInterval(async() => {
            await getFaces();
        }, 50);
        return () => clearInterval(interval);
    }, [results])

    return (
        <div>
            <Webcam ref={camera} width="800px" height="auto"/>
        </div>
    )
}

export default Camera
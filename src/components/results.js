import React from 'react';

const Results = ({results,handleEmotion}) => {
    
    if (results.length === 1) {
        handleEmotion(results[0].expressions.asSortedArray()[0].expression)
        return (
            <div>
                <h1>Results</h1>
                <p>Number of faces: {results.length}</p>
                Emotion is {results[0].expressions.asSortedArray()[0].expression}!
                
            </div>
        );
    }
    else{
        return (
            <div>
                <h1>Results</h1>
                <p>No faces detected</p>
            </div>
        )
    }
}

export default Results;
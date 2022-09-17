import React from 'react';

const Results = ({results,handleEmotion}) => {
    
    if (results.length > 0) {
        handleEmotion(results[0].expressions.asSortedArray()[0].expression)
        return (
            <div>
                <h1>Results</h1>
                <p>Number of faces: {results.length}</p>
                {results.length > 1 ? (
                    <div>
                        {results.map((result, i) => (
                            <div className="results__wrapper" key={i}>
                                <p>One of you is probably is looking {result.expressions.asSortedArray()[0].expression}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Here is your expression! {results[0].expressions.asSortedArray()[0].expression}</p>
                )}
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
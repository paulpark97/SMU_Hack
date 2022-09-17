import React from 'react';

const Results = ({results,processing}) => {
    if (processing && results) {
        <h1>loading...</h1>
    }
    if (!processing && results ) {
        return (
            <div>
                <h1>Results</h1>
                <p>Number of faces: {results.length}</p>
                <p>Expression: {results[0].expressions.asSortedArray()[0].expression}</p>
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
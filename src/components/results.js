import React from 'react';

const Results = ({results,handleEmotion}) => {
    let emotionScore = [0, 0, 0, 0, 0, 0, 0];

    function calcEmotionScores(expressions) {
        emotionScore[0] += expressions.angry;
        emotionScore[1] += expressions.disgusted;
        emotionScore[2] += expressions.fearful;
        emotionScore[3] += expressions.happy;
        emotionScore[4] += expressions.neutral;
        emotionScore[5] += expressions.sad;
        emotionScore[6] += expressions.surprised;
    }

    function getHighestScore(emotionScore) {
        let highestEmotion = 0;
        let highsetScoreValue = 0;

        for(let i = 0; i < emotionScore.length; i++) {
            if(highsetScoreValue < emotionScore[i]) {
                highsetScoreValue = emotionScore[i];
                highestEmotion = i;
            }
        }

        switch(highestEmotion) {
            case 0:
                return 'angry';
                break;
            case 1:
                return 'disgusted';
                break;
            case 2:
                return 'fearful';
                break;
            case 3:
                return 'happy';
                break;
            case 4:
                return 'neutral';
                break;
            case 5:
                return 'sad';
                break;
            case 6:
                return 'surprised';
                break;
            default:
                break;
        }
    }

    if (results && results.length > 0) {
        for(let i = 0; i < results.length; i++) {
            calcEmotionScores(results[i].expressions)
        }

        handleEmotion(getHighestScore(emotionScore))
        return (
            <div>
                <h1>Results</h1>
                <p>Number of faces: {results.length}</p>
                <div>
                    {results.map((result, i) => (
                        <div className="results__wrapper" key={i}>
                            <p>I miss us {result.expressions.asSortedArray()[0].expression}</p>
                        </div>
                    ))}
                </div>
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
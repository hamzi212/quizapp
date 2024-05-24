// Result.js
import React from 'react';

const Result = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div className="result">
      <h2>Quiz Result</h2>
      <p>You scored {score} out of {totalQuestions} questions.</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Result;
// // App.js

// import React, { Component } from "react";
// import './bootstrap-5.2.3-dist/bootstrap-5.2.3-dist/css/bootstrap.min.css'
// import Question from "./component/Question";
// import qBank from "./component/QuestionBank";
// import Score from "./component/Score";
// import "./App.css";

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			questionBank: qBank,
// 			currentQuestion: 0,
// 			selectedOption: "",
// 			score: 0,
// 			quizEnd: false,
// 		};
// 	}

// 	handleOptionChange = (e) => {
// 		this.setState({ selectedOption: e.target.value });
// 	};

// 	handleFormSubmit = (e) => {
// 		e.preventDefault();
// 		this.checkAnswer();
// 		this.handleNextQuestion();
// 	};

// 	checkAnswer = () => {
// 		const { questionBank, currentQuestion, selectedOption, score } = this.state;
// 		if (selectedOption === questionBank[currentQuestion].answer) {
// 			this.setState((prevState) => ({ score: prevState.score + 1 }));
// 		}
// 	};

// 	handleNextQuestion = () => {
// 		const { questionBank, currentQuestion } = this.state;
// 		if (currentQuestion + 1 < questionBank.length) {
// 			this.setState((prevState) => ({
// 				currentQuestion: prevState.currentQuestion + 1,
// 				selectedOption: "",
// 			}));
// 		} else {
// 			this.setState({
// 				quizEnd: true,
// 			});
// 		}
// 	};

// 	render() {
// 		const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
// 			this.state;
// 		return (
// 			<div className="App d-flex flex-column align-items-center justify-content-center">
// 				<h1 className="app-title">QUIZ APP</h1>
// 				{!quizEnd ? (
// 					<Question
// 						question={questionBank[currentQuestion]}
// 						selectedOption={selectedOption}
// 						onOptionChange={this.handleOptionChange}
// 						onSubmit={this.handleFormSubmit}
// 					/>
// 				) : (
// 					<Score
// 						score={score}
// 						onNextQuestion={this.handleNextQuestion}
// 						className="score"
// 					/>
// 				)}
// 			</div>
// 		);
// 	}
// }

// export default App;


// QuizApp.js
import React, { useState } from 'react';
import './bootstrap-5.2.3-dist/bootstrap-5.2.3-dist/css/bootstrap.min.css'
import Question from './component/Question';
import Result from './component/Result';
import './App.css';

const QuizApp = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
  
	const questions = [
	  {
		question: "Html Stands For____________________________",
		options: [
		  "Hyper Text Makeup Language",
		  "html",
		  "Case Cading Style Sheet",
		  "Hypertext markup language",
		],
		correctAns: "Hypertext markup language",
	  },
	  {
		question: "Css Stands For _______________________",
		options: [
		  "Casecading Style Sheet",
		  "Java",
		  "Ram",
		  "Hypertext markup language",
		],
		correctAns: "Casecading Style Sheet",
	  },
	  {
		question: "Js Stands For _______________________",
		options: ["Java Style", "Java Script", "Script", "Script Src"],
		correctAns: "Java Script",
	  },
	  {
		question: "Dom Stands For _______________________",
		options: ["Document Object Model", "html", "Css", "Java"],
		correctAns: "Document Object Model",
	  },
	  {
		question: "Ram Stands For _______________________",
		options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
		correctAns: "Random Acccess Memory",
	  },
	  {
		question: "Rom Stands For _______________________",
		options: [
		  "Hyper Text Markup Language",
		  "html",
		  "HTml",
		  "Read Only Memory",
		],
		correctAns: "Read Only Memory",
	  },
	];
  
	const handleAnswer = (answer) => {
	  if (answer === questions[currentQuestion].correctAns) {
		setScore(score + 1);
	  }
	  const nextQuestion = currentQuestion + 1;
	  if (nextQuestion < questions.length) {
		setCurrentQuestion(nextQuestion);
	  } else {
		setShowResult(true);
	  }
	};
  
	const restartQuiz = () => {
	  setCurrentQuestion(0);
	  setScore(0);
	  setShowResult(false);
	};
  
	return (
	  <div className="quiz-app">
		{showResult ? (
		  <Result score={score} totalQuestions={questions.length} restartQuiz={restartQuiz} />
		) : (
		  <Question
			question={questions[currentQuestion].question}
			options={questions[currentQuestion].options}
			handleAnswer={handleAnswer}
		  />
		)}
	  </div>
	);
  };
  
  export default QuizApp;

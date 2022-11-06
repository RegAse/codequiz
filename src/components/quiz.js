import { useParams } from "react-router-dom";
import "./../styles/quiz.css"
import { data } from "./../data/quizData"

import { useState, useEffect } from "react";

export default function Quiz() {

    let { id } = useParams();

    const [hasResult, setHasResult] = useState(false);
    const [result, setResult] = useState({ answers: [] });
    const [animationState, setAnimationState] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentChoice, setCurrentChoice] = useState(-1);

    // Get the quiz data....
    let quiz = data["quizzes"][0];
    let currentQuestionData = quiz.questions[currentQuestionIndex];

    const [currentQuestion, setCurrentQuestion] = useState(currentQuestionData);

    useEffect(() => {

    });

    function nextQuestion() {
        if (quiz.questions.length <= currentQuestionIndex + 1) {
            // Final question answered
            setHasResult(true);
            return;
        }

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentQuestion(quiz.questions[currentQuestionIndex + 1]);
        setAnimationState(true);
    }

    function onQuestionChosen(event){
        setCurrentChoice(event.target.value);
    }

    function answerQuestion() {
        setAnimationState(false);

        // Check if the answer was correct or not...
        let isCorrect = currentQuestion.answer == currentChoice;
        console.log(isCorrect);

        // Store the user answer
        setResult({ answers: [...result.answers, isCorrect] });

        // Load next question while swiping the other one out
        setTimeout(function () {
            nextQuestion();
        }, 400)
    }

    return (
        <div className="quiz-wrapper">
            <div className="quiz">
                <div className="quiz-progressbar">
                    {
                        result.answers.map(answer => (
                            answer ?
                                <div className="quiz-correct" style={{ width: ((1) / quiz.questions.length) * 100 + "%" }}><div></div></div>
                                :
                                <div className="quiz-incorrect" style={{ width: ((1) / quiz.questions.length) * 100 + "%" }}><div></div></div>
                        ))
                    }
                </div>
                {hasResult
                    ?
                    <div className="quiz-content">
                        <h2 className="quiz-question-title text-center">{quiz.name}</h2>
                        <h2 className="quiz-question-result-title text-center">Congratulations!</h2>
                        <p className="text-center">You got {result.answers.filter(Boolean).length} out of { quiz.questions.length } Correct</p>
                    </div>
                    : <div className={(animationState ? "quiz-swipe-in" : "quiz-swipe-out")}>
                        <div className="quiz-content">
                            <h2 className="quiz-question-title text-center">{quiz.name}</h2>
                            <p className="quiz-question-number text-center">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>

                            <p className="quiz-question mt-5">{currentQuestion.name}</p>
                            <div onChange={onQuestionChosen}>
                                {
                                    currentQuestion.choices.map((choice, index) => (
                                        <div className="quiz-choice" key={choice.choice}>
                                            <label>
                                                <input className="radio-choice" type="radio" name="choice" value={index} />
                                                {choice.choice}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                            <button className="btn btn-primary mt-3" onClick={() => answerQuestion()}>Submit</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
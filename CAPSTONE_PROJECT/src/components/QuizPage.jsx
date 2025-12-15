import React from "react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Answers from "./Answers.jsx";


export function QuizPage() {

    const navigate= useNavigate();

    //state management for quiz questions
    //var for all quiz questions
    const [questions, setQuestions] = useState([]);
    //var for the current question
    const [currentQuestion, setCurrentQuestion]= useState(0);
    //var will show the funal score
    const [showScore, setShowScore] =useState(false);
    //var to keep track of the score
    const [score, setScore]= useState(0);
    //var keeps trach of selected answer by user
    const [selectedAnswer, setSelectedAnswer]= useState([]);

    //api questions
    const fetchQuestions = async() => {

        try{
        const respone = await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple' 
        );


        if(!respone.ok){
            throw new Error('Failed to fetch questions');
        }

        //convert api data into jsn() data
        const apiData= await respone.json();
        console.log(apiData);
        //all fetched questions from the api will be store in questions var
        setQuestions(apiData.results);
        }
        catch(error){
            console.log(error);
        }
    }

    //this will looad th questions once the componnet is live/active
    useEffect(() => {
        fetchQuestions()
    }, []);

    const handleAnswerOptionClick= (isCorrect,answer) => {
        //isCorrect is a boolean value, if its true the score gets increased by 1
        if(isCorrect) {
            setScore((prev) => prev +1);
        }

        const updatedSelecetdAnswers= [...selectedAnswer];
        updatedSelecetdAnswers[currentQuestion]= answer;
        setSelectedAnswer(updatedSelecetdAnswers);

        const nextQuestion= currentQuestion+1 
        if (nextQuestion <questions.length) {
            setCurrentQuestion(nextQuestion)
        } else 
            setShowScore(true)
    }

    const handlePlayAgainClick= () => {
        //this will reset all the states to initial values
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer([]);
    }


    return(
        <div className='bg-[#00008B] w-screen h-screen mx-auto flex justify-center items-center flex-grid'>

            <div className='bg-[#0000CD] w-300 h-170 mx-auto rounded-xl flex justify-center items-center flex-grid'>
                
                <div className='bg-[#4169E1] w-250 h-150 mx-auto rounded-xl'>

                    <div className='bg-[#1E9OFF]  w-200 h-100 mx-auto rounded-xl flex justify-center items-center flex-grid'>

                        <div className='bg-[#00BFFF]  w-200 h-100 mx-auto rounded-xl flex justify-center items-center flex-col mt-50 justify-evenly'>
                            <h1 className='text-xl font-bold font-sans'>General Knowledge</h1>

                            {showScore ? (
                                //if shwoScorore is true, final score will be displayed
                                <div>
                                    <h2>Your Total is: {score}/{questions.length}</h2>
                                    <button
                                    className='play-agin'
                                    onClick={handlePlayAgainClick}>Play Again</button>
                                </div>
                            ): (
                                //else, the question screen will be displayed
                                < >

                                    <div className='question-section flex flex-col justify-center items-center gap-5'>
                                        <div className='question-count'>
                                            <span>{currentQuestion +1}</span>/{questions.length}
                                        </div>

                                        <div className="question-text">
                                            {questions[currentQuestion]?.question}
                                        </div>

                                        <Answers 
                                        questions={questions}
                                        currentQuestions={currentQuestion}
                                        handleAnswerOptionClick={handleAnswerOptionClick}
                                        />

                                        {/*next and previous buttons*/}
                                        <div className="flex gap-10">
                                           {currentQuestion && (<button onClick={() =>setCurrentQuestion (currentQuestion-1)} className='bg-white rounded-xl w-30 h-10 text-center font-bold text-normal'>Previous</button>)} 
                                           
                                           {currentQuestion <questions.length - 1 && (<button onClick={() =>setCurrentQuestion (currentQuestion+1)} className='bg-white rounded-xl w-30 h-10 text-center font-bold text-normal'>Next</button>)} 
                                        </div>

                                    </div>
                                </>
                            )

                            }

                            
                            {/*<button className='bg-white rounded-xl w-30 h-10 text-center font-bold text-normal' onClick={() => navigate('/total')}>
                                Next</button>*/}
                            
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
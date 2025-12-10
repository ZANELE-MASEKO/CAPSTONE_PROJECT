import React, { use }  from "react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export function QuizPage() {

    const navigate= useNavigate();

    //state management for quiz questions
    //var for all quiz questions
    const [questions, setQuestions] = useState([]);
    //var for the current question
    const [currentQuestion, setCurrentQuestion]= useState(0);
    //var will show the funal score
    const [showScore, setashowScore] =useState(false);
    //var to keep track of the score
    const [score, setScore]= useState(0);
    //var keeps trach of selected answer by user
    const [selectedAnswer, setSelectedAnswer]= useState([]);

    //api questions
    const apiQuestions = async() => {
        const apiRespone = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        //convert api data into jsn() data
        const apiData= await apiRespone.json();
        console.log(data);
        //all fetched questions from the api will be store in questions var
        setQuestions(apiData);
    }

    return(
        <div className='bg-[#00008B] w-screen h-screen mx-auto flex justify-center items-center flex-grid'>

            <div className='bg-[#0000CD] w-300 h-170 mx-auto rounded-xl flex justify-center items-center flex-grid'>
                
                <div className='bg-[#4169E1] w-250 h-150 mx-auto rounded-xl'>

                    <div className='bg-[#1E9OFF]  w-200 h-100 mx-auto rounded-xl flex justify-center items-center flex-grid'>

                        <div className='bg-[#00BFFF]  w-190 h-100 mx-auto rounded-xl flex justify-center items-center flex-col mt-50 justify-evenly'>
                            <h1 className='text-xl font-bold font-sans'>General Knowledge</h1>
                            <p>Quiz Question</p>

                            
                            <button className='bg-white rounded-xl w-30 h-10 text-center font-bold text-normal' onClick={() => navigate('/total')}>
                                Next</button>
                            
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
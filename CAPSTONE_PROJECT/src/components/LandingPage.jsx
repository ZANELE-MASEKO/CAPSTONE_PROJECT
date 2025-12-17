import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import fetchUser from './UserName';
import fecthdata from './trivia';
import DarkMode from './DarkMode';

export function LandingPage() {

  const navigate= useNavigate();

/*quiz topics available
const categories = [
  {id:1, name: 'sport'},
  {id:2,name:'history'},
  {id:3,name:'geography'}, 
  {id:4,name:'animals'}
];*/

/*const startQuiz= () => {
  if (!selectedCategory) {
    alert('Choose a valid topic')
    return;
  }
  navigate(`/QuizPage/${selectedCategory}`);
}

const [selectedCategory, setSelectedCategory]= useState('');*/

  return (
    <div className='bg-[#00008B] w-screen h-screen mx-auto flex-grid justify-center items-center flex' id='light-gray'>

      <div className='bg-[#0000CD] w-300 h-170 mx-auto rounded-xl flex flex-grid justify-center items-center relative' id='dark-gray'> 

        <button className='bg-white rounded-xl w-25 h-8 text-center font-bold text-normal text-black hover:bg-black hover:text-white  absolute top-[50px] right-[110px] ' id='darkmode'
        onClick={DarkMode}>Darkmode</button>
   
                    <div className='bg-[#00BFFF] w-250 h-150 mx-auto rounded-xl flex flex-col justify-evenly items-center pt-5 pb-5' id='solid-black'>
                       <h1 className='text-xl font-bold font-sans text-center'
                       id='content'>Welcome! <br />
                          Take a quiz to test your general knowledge.
                          Are you up for the challenge?
                        </h1>

                       <p className='mt-10 text-xl font-sans mb-[-14px]'
                       id='enter-name'>Enter your name:</p>
                    
                       <input type="text" className='bg-white w-80 rounded-xl p-3' placeholder='Enter your name:' required id='username' autoComplete='off'/>

                       <p id='userError' style={{display:'none'}}></p>

                       <button className='bg-white rounded-xl w-20 h-6 text-center font-bold text-normal hover:bg-[#78cdf5]' id='button' onClick={fetchUser}
                       >
                        Done</button>

                       <p id='welcomeMessage' style={{display:'none'}} className='text-xl'></p>
              

                       
                       <button className='bg-white rounded-xl w-30 h-10 text-center font-bold text-normal hover:bg-[#78cdf5]' onClick={() => navigate('/quiz')}
                        id='button'>lets Go!!</button>
                       
                       
                    </div>

      </div>
       
    </div>
  );
}

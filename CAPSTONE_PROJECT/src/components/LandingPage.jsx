import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import fetchUser from './UserName';
import fecthdata from './trivia';

export function LandingPage() {

  const navigate= useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='bg-[#00008B] w-screen h-screen mx-auto flex-grid justify-center items-center flex'>

      <div className='bg-[#0000CD] w-300 h-170 mx-auto rounded-xl flex flex-grid justify-center items-center'> 
   
                    <div className='bg-[#00BFFF] w-250 h-150 mx-auto rounded-xl flex flex-col justify-evenly items-center pt-5 pb-5'>
                       <h1 className='text-xl font-bold font-sans text-center'>Welcome! <br />
                          Take a quiz to test your general knowledge.
                          Are you up for the challenge?
                        </h1>

                       <p className='mt-10 text-xl font-sans mb-[-14px]'>Enter your name:</p>
                    
                       <input type="text" className='bg-white w-80 rounded-xl p-3' placeholder='Enter your name:' required id='username' autoComplete='off'/>

                       <p id='userError' style={{display:'none'}}></p>

                       <button className='bg-white rounded-xl w-20 h-6 text-center font-bold text-normal hover:bg-[#78cdf5]' id='done' onClick={fetchUser}>
                        Done</button>

                       <p id='welcomeMessage' style={{display:'none'}} className='text-l'></p>
                       
                       <div className='w-200 h-30 flex justify-center items-center flex-row justify-evenly rounded-xl gap-25 '>

                        <div>
                            <label className='bg-white w-50 h-6 flex justify-center items-center rounded-tl-[10px] rounded-tr-[10px]'
                            >Choose Topic</label>

                            <select className='bg-white w-50 h-6 rounded-bl-[10px] rounded-br-[10px] hover:bg-[#78cdf5]'>
                              <option value="">1</option>
                              <option value="">1</option>
                              <option value="">1</option>
                            </select>
                        </div>

                         <div>
                            <label className='bg-white w-50 h-6 flex justify-center items-center rounded-tl-[10px] rounded-tr-[10px]'
                            >Difficulty</label>

                            <select className='bg-white w-50 h-6 rounded-bl-[10px] rounded-br-[10px] hover:bg-[#78cdf5]'>
                              <option value="">Easy</option>
                              <option value="">Medium</option>
                              <option value="">Hard</option>
                            </select>
                        </div>

                        <div>
                            <label className='bg-white w-50 h-6 flex justify-center items-center rounded-tl-[10px] rounded-tr-[10px]'
                            >No Questions</label>
                            <select className='bg-white w-50 h-6 rounded-bl-[10px] rounded-br-[10px] hover:bg-[#78cdf5]'>
                              <option value="">1</option>
                              <option value="">1</option>
                              <option value="">1</option>
                            </select>
                        </div>
                       </div>

                       
                       <button className='bg-white rounded-xl w-30 h-10 text-center font-bold text-normal hover:bg-[#78cdf5]' onClick={() => navigate('/quiz')}>lets Go!!</button>
                       
                       
                    </div>

      </div>
       
    </div>
  );
}

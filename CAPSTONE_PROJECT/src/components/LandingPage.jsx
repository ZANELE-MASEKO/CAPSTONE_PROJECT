import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import fetchUser from './UserName';
import fecthdata from './trivia';
import DarkMode from './DarkMode';

export function LandingPage() {

  const navigate= useNavigate();
  //choosing quiz catgories
  const [category,setCategory]= useState('');

  
const categories = [
  {id:21, name: 'sports'},
  {id:23,name:'history'},
  {id:22,name:'geography'}, 
  {id:4,name:'animals'}
];

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

                      <div className='flex flex-row gap-10'>
                        <label>Choose category:</label>

                       <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Select category</option>

                          {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>
                              {cat.name}
                            </option>
                          ))}
                        </select>
                      </div>
                       
              

                       
                       <button className='bg-white rounded-xl w-30 h-10 text-center font-bold text-normal hover:bg-[#78cdf5]' onClick={() => navigate('/quiz')}
                        id='button'>lets Go!!</button>
                       
                       
                    </div>

      </div>
       
    </div>
  );
}

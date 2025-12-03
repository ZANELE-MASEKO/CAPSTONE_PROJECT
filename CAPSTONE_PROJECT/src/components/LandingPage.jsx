import React from 'react';
import {useNavigate} from 'react-router-dom'

export function LandingPage() {

  const navigate= useNavigate();

  return (
    <div className='bg-[#00008B] w-screen h-screen mx-auto flex-grid justify-center items-center flex'>

      <div className='bg-[#0000CD] w-300 h-170 mx-auto rounded-xl flex flex-grid justify-center items-center'> 
   
                    <div className='bg-[#00BFFF] w-250 h-150 mx-auto rounded-xl flex flex-col justify-evenly items-center pt-5 pb-5'>
                       <h1 className='text-xl font-bold font-sans'>Welcome! <br />
                          Take a quiz to test your general knowledge.
                          Are you up for the challenge?
                        </h1>

                       <p className='mt-10 text-xl font-sans mb-[-14px]'>Enter your name:</p>
                    
                       <input type="text" className='bg-white w-80 rounded-xl p-3' placeholder='Enter your name:'/>
                       
                       <div className='w-150 h-30 flex justify-center items-center flex-row justify-evenly rounded-xl gap-30 '>

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

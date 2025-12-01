import React from 'react';

export function LandingPage() {
  return (
    <div className='flex justify-center align-center'>
      <div className='bg-[#00008B] w-screen h-screen mx-auto rounded-xl '> 
        <div className='bg-[#0000CD] w-300 h-170 mx-auto rounded-xl '> 
            <div className='bg-[#4169E1] w-250 h-150 mx-auto rounded-xl '>
                <div className='bg-[#1E9OFF]  w-200 h-100 mx-auto rounded-xl '>
                    <div className='bg-[#00BFFF] w-160 h-80 mx-auto rounded-xl flex flex-col justify-between items-center pt-5 pb-5'>
                       <h1 className='text-xl font-bold font-sans'>Welcome! <br />
                          Take a quiz to test your general knowledge.
                          Are you up for the challenge?
                        </h1>

                       <p className='mt-10 text-xl font-sans'>Enter your name:</p>
                       <input type="text" className='bg-white w-80 rounded-xl p-3' placeholder='Enter your name:'/>
                       <br />
                       <button className='bg-white rounded-xl w-30 h-10 text-center font-bold text-normal'>lets Go!!</button>
                    </div>

                </div>

            </div>
        </div>

      </div>
       
    </div>
  );
}

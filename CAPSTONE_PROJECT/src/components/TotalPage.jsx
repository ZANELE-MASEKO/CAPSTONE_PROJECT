import React from 'react'

export function TotalPage() {
  return (
     <div className='flex justify-center align-center'>
      <div className='bg-[#00008B] w-screen h-screen mx-auto rounded-xl '> 
        <div className='bg-[#0000CD] w-300 h-170 mx-auto rounded-xl '> 
            <div className='bg-[#4169E1] w-250 h-150 mx-auto rounded-xl '>
                <div className='bg-[#1E9OFF]  w-200 h-100 mx-auto rounded-xl '>
                    <div className='bg-[#00BFFF] w-160 h-80 mx-auto rounded-xl flex flex-col justify-evenly items-center pt-5 pb-5'>
                       <h1 className='text-xl font-bold font-sans'>
                          Your Total score is:
                        </h1>
                        <div className='w-50 h-50 rounded-full bg-white flex justify-center items-center'>
                          total score
                        </div>
                    </div>

                </div>

            </div>
        </div>

      </div>
       
    </div>
  )
}


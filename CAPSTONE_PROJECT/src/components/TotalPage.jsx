import React from 'react'

export function TotalPage() {
  return (
     <div className='bg-[#00008B] w-screen h-screen mx-auto flex justify-center items-center flex-grid'> 

        <div className='bg-[#0000CD] w-300 h-170 mx-auto rounded-xl flex justify-center items-center flex-grid'>

            <div className='bg-[#4169E1] w-250 h-150 mx-auto rounded-xl flex justify-center items-center flex-grid'>

                <div className='bg-[#1E9OFF]  w-200 h-100 mx-auto rounded-xl flex justify-center items-center flex-grid'>

                    <div className='bg-[#00BFFF] w-200 h-120 mx-auto rounded-xl flex flex-col justify-evenly items-center pt-5 pb-5'>
                       <h1 className='text-xl font-bold font-sans'>
                          Your Total score is:
                        </h1>
                        <div className='w-30 h-30 rounded-full bg-white flex justify-center items-center'>
                          total score
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus tenetur, neque accusamus cumque suscipit numquam! Unde perferendis autem quo distinctio pariatur asperiores, fugiat reiciendis possimus totam laborum numquam iure ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quidem. Facilis repellendus debitis quo obcaecati! Laudantium necessitatibus eaque tenetur? Ratione maiores eveniet sapiente ipsam perspiciatis itaque cupiditate suscipit deserunt laudantium.</p>

                </div>

            </div>
        </div>

      </div>
       
    </div>
  )
}


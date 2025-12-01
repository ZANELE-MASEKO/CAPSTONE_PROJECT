import React from 'react';

export function LandingPage() {
  return (
    <div>
      <div className='bg-blue-500 w-screen h-screen mx-auto'> first layer
        <div className='bg-red-500 w-410 h-172 mx-auto'> second layer
            <div className='bg-orange-500 w-400 h-162 mx-auto'> third layer
                <div className='bg-yellow-500 w-390 h-152 mx-auto'> fourth layer
                    <div className='bg-pink-500 w-380 h-142 mx-auto'>  fifth layer

                    </div>

                </div>

            </div>
        </div>

      </div>
       
    </div>
  );
}

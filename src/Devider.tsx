import React from 'react';

const Devider = ({title,percentage}) => {
    return (
        <div className='px-2 bg-gray-300 py-1 capitalize flex gap-32 font-bold'>
                <p>
           Section :{title}
           </p>
           <p className='text-center'>{percentage}%</p>

              </div>
    );
};

export default Devider;
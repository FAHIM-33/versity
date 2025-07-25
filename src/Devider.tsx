import React from 'react';

const Devider = ({title,percentage}) => {
    return (
        <div className='bg-amber-100 capitalize flex gap-32 '>
                <p>
           Section :{title}
           </p>
           <p className='text-center'>{percentage}%</p>

              </div>
    );
};

export default Devider;
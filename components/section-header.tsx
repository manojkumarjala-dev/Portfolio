import React from 'react';

export default function Sectionheader({children}:{children:React.ReactNode}) {
    return (
        <h2 className='text-bold text-2xl mb-8 text-center mt-20'>{children}</h2>
    );
}

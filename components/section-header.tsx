import React from 'react';

export default function Sectionheader({children}:{children:React.ReactNode}) {
    return (
        <h2 className='text-bold text-2xl my-8'>{children}</h2>
    );
}

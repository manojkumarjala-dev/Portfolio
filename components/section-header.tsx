import React from 'react';

export default function Sectionheader({children}:{children:React.ReactNode}) {
    return (
        <h2 className='text-bold text-2xl pb-3'>{children}</h2>
    );
}

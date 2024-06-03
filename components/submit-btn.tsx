import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';
function Submitbtn() {
    const {pending} = useFormStatus()
    return (
        <button  disabled={pending} className='disabled:scale-100 disabled:bg-opacity-65 flex bg-gray-900 focus:scale-110 hover:scale-110 hover:bg-gray-950 text-gray-100 h-[3rem] w-[8rem] text-center justify-center items-center rounded-full gap-2 group transition' type='submit'> {
            pending? (<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>) :( 
            <>
            Submit<FaPaperPlane className='text-xs group-hover:-translate-y-1 group-hover:translate-x-1 opacity:70 transition'/>
            </>
            )
        }
        </button>

    );
}

export default Submitbtn;
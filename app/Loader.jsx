import Image from 'next/image';
import React, { use, useEffect } from 'react'
import { Icons } from './Logos';

const Loader = () => {
    const [height, setHeight] = React.useState('120vh');
    const [show, setShow] = React.useState(true);
    useEffect(() => {
        let timer1 = setTimeout(() => {
            setHeight('0%');
            setShow(false);
        }
        , 4950)
        return () => {
            clearTimeout(timer1);
        }
    }, []);
  return (
    <>
    {show ? <div className={`fixed top-0 h-[110vh] w-[100vw] bg-[#FFF] z-[500] transition-all duration-300 ease-in-out flex flex-col justify-center items-center pt-[4rem] max-md:pt-[0rem]`}>
 
        <div className="hidden sm:block"><Icons.SplashScreenWeb /></div>
        <div className="sm:hidden mb-5"><Icons.SplashScreenMobile /></div>
        <div className='w-full flex justify-center items-center mt-2 max-md:mt-0'>
            <h1 className="text-[#007947] text-[2.5rem] font-normal space-x-[0.0625rem] taviraj max-md:text-[1.25rem]">Better Environment</h1>
            <h1 className="text-[#000] text-[2.5rem] font-normal space-x-[0.0625rem] taviraj max-md:text-[1.25rem]">, Better Tomorrow</h1>
        </div>
        <span className="loader"></span>
    </div> : (<></>)}
    </>
  )
}

export default Loader
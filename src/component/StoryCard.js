import React from 'react'
import tickarrow from '../asset/icons/tickarrow.svg'
const StoryCard = () => {
    return (
        <>
            <div className='l w-[285px] h-[232px]  shadow-xl  rounded-lg p-5 className="flex justify-center flex-col items-center mb-4 bg-white"'>



                <div className='flex justify-between mb-4'>
                    <button className='w-[80px] h-[25px] flex items-center justify-center text-white bg-deep-brownish py-[5px] px-[8px] rounded-full'>Insight</button>
                    <p style={{
                        background:
                            "linear-gradient(180deg, rgba(255, 255, 255, 0.67) 0%, rgba(255, 255, 255, 0.49) 99.99%, rgba(255, 255, 255, 0) 100%)",
                    }}
                        className="flex justify-center items-center w-7 h-[26px] border-zinc-400 border-[0.3px] rounded-[3px]    "
                    >
                        <img src={tickarrow} alt="alt" className="" />
                    </p>
                </div>
                <div>
                    <p className='text-[20px] font-PlusJakartaSans font-semibold leading-[25.2px] mb-2 tracking-wide'>Show Your locallove</p>
                    <p className='font-PlusJakartaSans text-[12px] font-normal text-lite-gray'>
                        An application programming interface (API) is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software.
                    </p>
                </div>
            </div>


        </>
    )
}

export default StoryCard
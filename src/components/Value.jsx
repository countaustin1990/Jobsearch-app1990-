import BEARRER from '../assets/bear-read.png'

const Value = () => {
    return(
        <div className='mb-[4rem] mt-[6rem'>
            <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
            The value that holds us true and to account
            </h1>

            <div className='grid gap-[10rem] grid-cols-3 items-center'>
                <div className='singleGrid rounded-[10px] hover:bg-[#87cefa] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                            <img src={BEARRER} alt='' className='w-[70%]'/>
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>
                    <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                        Things being made beautiful simple are at the heart of everything we do.
                    </p>
                </div>






             {/* this how to comment in jsx react doing an additional card value */}



                <div className='singleGrid rounded-[10px] hover:bg-[#87cefa] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                            <img src={BEARRER} alt='' className='w-[70%]'/>
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>
                    <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                        Things being made beautiful simple are at the heart of everything we do.
                    </p>
                </div>

             {/* this how to comment in jsx react doing an additional card value */}
            

            
             <div className='singleGrid rounded-[10px] hover:bg-[#87cefa] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                            <img src={BEARRER} alt='' className='w-[70%]'/>
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>
                    <p className='text-[15px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                        Things being made beautiful simple are at the heart of everything we do.
                    </p>
                </div>

            {/*end of card value*/}


            </div>

            {/*adding get started section here to login or signup */}
            <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]'>

                <div>
                    <h1 className='text-blueColor text-[10px] font-semibold'>
                        Ready to switch a career
                    </h1>
                    <h2 className='text-textColor text-[25px] font-bold'>
                        Let's get started
                    </h2>
                </div>
                    <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[13px] font-semibold text-blueColor hover:bg-white border-blueColor'>
                        Get Started
                    </button>
            </div>
        </div>
    )
}

export default Value
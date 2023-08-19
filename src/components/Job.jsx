import { BiTimeFive } from 'react-icons/bi'
import BEARRER from '../assets/bear-read.png'

 //for all the jobs, we are going to use igh order array method called map
 //In this case we shall list all the jobs into an array called Data




 const Job = () => {
    return(
        <div>

            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive></BiTimeFive><h6>Now</h6>
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#86765] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <span>
                            <img src={BEARRER} className='seemee' alt='image' />
                        </span>
                        
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                            Austino Inc.
                        </span>
                    </div>  
                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
                        Apply Now
                    </button>
                    
                </div>

                {/* this how to comment in jsx react doing an additional card */}

                <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive></BiTimeFive><h6>Now</h6>
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#86765] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <span>
                            <img src={BEARRER} className='seemee' alt='image' />
                        </span>
                        
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                            Austino Inc.
                        </span>
                    </div>  
                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
                        Apply Now
                    </button>
                    
                </div>
            </div>

            {/* this how to comment in jsx react doing an additional card */}

            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive></BiTimeFive><h6>Now</h6>
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#86765] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <span>
                            <img src={BEARRER} className='seemee' alt='image' />
                        </span>
                        
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                           Austino Inc.
                        </span>
                    </div>  
                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
                        Apply Now
                    </button>
                    
                </div>
            </div>





            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive></BiTimeFive><h6>Now</h6>
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#86765] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <span>
                            <img src={BEARRER} className='seemee' alt='image' />
                        </span>
                        
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                            Austino Inc.
                        </span>
                    </div>  
                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
                        Apply Now
                    </button>
                    
                </div>
            </div>



            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive></BiTimeFive><h6>Now</h6>
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#86765] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <span>
                            <img src={BEARRER} className='seemee' alt='image' />
                        </span>
                        
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                            Austino Inc.
                        </span>
                    </div>  
                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
                        Apply Now
                    </button>
                    
                </div>
            </div>




            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive></BiTimeFive><h6>Now</h6>
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#86765] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <span>
                            <img src={BEARRER} className='seemee' alt='image' />
                        </span>
                        
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                            Austino Inc.
                        </span>
                    </div>  
                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
                        Apply Now
                    </button>
                    
                </div>
            </div>



            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive></BiTimeFive><h6>Now</h6>
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#86765] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <span>
                            <img src={BEARRER} className='seemee' alt='image' />
                        </span>
                        
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                            Austino Inc.
                        </span>
                    </div>  
                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
                        Apply Now
                    </button>
                    
                </div>
            </div>



            <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
                
                <div className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Development</h1>

                        <span className='flex item-center text-[#ccc] gap-1'>
                            <BiTimeFive></BiTimeFive><h6>Now</h6>
                        </span>
                    </span>

                    <h6 className='text-[#ccc]'>Canada</h6>

                    <p className='text-[13px] text-[#86765] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        Live in Canada and gain all the opportunities that we have to offer.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <span>
                            <img src={BEARRER} className='seemee' alt='image' />
                        </span>
                        
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                            Austino Inc.
                        </span>
                    </div>  
                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor'>
                        Apply Now
                    </button>
                    
                </div>
            </div>
            </div>  



            
        </div>
    )
 }

 export default Job
"use client"
import React from 'react';
import Countdown from 'react-countdown';

const Count = () => {
    const countdownDate = new Date('december 31, 2024 00:00:00');
  
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <span>Countdown Completed! Food Hub is Open</span>;
      } else {
        return (

          // <span className='py-1 px-2 bg-slate-50 rounded-full font-bold'>
          //   {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
          // </span>

          <div className=' timerHead flex justify-center items-center gap-4 space-x-4'>
            <div className=' timer px-6 bg-[rgba(255,255,255,0.08)] rounded-3xl gap-0 flex flex-col justify-center items-center'>
              <span className='text-[150px] font-[900] text-white'> {days} </span>
              <span className='text-[35px] font-[900] text-white'> Days</span>
            </div>

            <div className='timer flex flex-col px-10 rounded-3xl bg-[rgba(255,255,255,0.08)] items-center'>
              <span className='text-[150px] font-[900] text-white'> {hours} </span>
              <span className='text-[35px] text-white font-[900]'> Hours</span>
            </div>

            <div className='timer flex flex-col px-10 rounded-3xl bg-[rgba(255,255,255,0.08)] items-center'>
              <span className='text-[150px] font-[900] text-white'> {minutes} </span>
              <span className='text-[35px] text-white font-[900]'> Minutes</span>
            </div>

            <div className='timer flex flex-col px-10 rounded-3xl bg-[rgba(255,255,255,0.08)] items-center'>
              <span className='text-[150px] text-white font-[900]'> {seconds} </span>
            
              <span className='text-[35px] text-white font-[900]'> Seconds</span>
            </div>
          </div>
        );
      } 
    };
  
    return (
      <div className='bg-[rgba(45,0,0,1)] border-2 border-slate-600 w-full p-12 rounded-3xl flex flex-col justify-center items-center gap-6'>
        {/* <p className="text-slate-800 order-1 font-bold italic">App launch date</p> */}
        <Countdown date={countdownDate} renderer={renderer} />
      </div>
    );
  };


export default Count;

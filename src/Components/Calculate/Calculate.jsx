import React, { useEffect, useState } from 'react';

const Calculate = ({readTime}) => {
    
        const [time, setTime] =useState(readTime)
        useEffect(() =>{
const getReadTimeFromStorage = localStorage.getItem("readTime");
setTime(getReadTimeFromStorage);
        },[readTime]);
    
    return (
        <div>
            <div className='spent-time'><h3 >Spent time on read {time||0}:min</h3></div> 
               
               <div className='bookmark-container'><h3> Bookmarked Blogs : </h3></div>
        </div>
    );
};

export default Calculate;
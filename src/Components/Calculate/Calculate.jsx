import React, { useEffect, useState } from "react";

const Calculate = ({ readTime, bookMarkDb }) => {
  const [time, setTime] = useState(readTime);
  useEffect(() => {
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
  }, [readTime]);

  const [bookMarkTitle, setBookMarkTitle] = useState(bookMarkDb);
  useEffect(() => {
    const getBookMarkFromStorage = JSON.parse(localStorage.getItem("Bookmark"));
    setBookMarkTitle(getBookMarkFromStorage);
  }, [bookMarkDb ]);

  return (
    <div>
      <div className="spent-time">
        <h3>Spent time on read: {time || 0}min</h3>
      </div>

      <div className="bookmark-container">
        <h3> Bookmarked Blogs :{bookMarkTitle?.length || 0} </h3>
       {
        bookMarkTitle?.map(bk =>
            <h3 className="bk-title">{bk?.title}</h3> 
            )
       }
      </div>
    </div>
  );
};

export default Calculate;

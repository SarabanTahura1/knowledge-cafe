import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Calculate from "../Calculate/Calculate";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [readTime, setReadTime] = useState("");
  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const sum = previousReadTime + time;
      localStorage.setItem("readTime", sum);
      setReadTime(sum);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };
  const [bookMarkDb, setBookMarkDb] = useState([]);
  const handleBookMark = (id, title) => {
    const previousBookMarkData = JSON.parse(localStorage.getItem("Bookmark"));
    const bookMarkArray = [];
    const bookMarkData = { id, title };
    if (previousBookMarkData) {
      const isBookMark = previousBookMarkData?.find((pd) => pd.id == id);

      if (isBookMark) {
        bookMarkArray.push(...previousBookMarkData, bookMarkData);

        localStorage.setItem("Bookmark", JSON.stringify(bookMarkArray));

        setBookMarkDb(bookMarkArray);
        swal("Sorry!", "You Have Already Bookmarked This Blog", "info")
      } else {
        bookMarkArray.push(...previousBookMarkData, bookMarkData);
        localStorage.setItem("Bookmark", JSON.stringify(bookMarkArray));
        setBookMarkDb(bookMarkArray);
      }
    } else {
      bookMarkArray.push(bookMarkData);
      localStorage.setItem("Bookmark", JSON.stringify(bookMarkArray));
      setBookMarkDb(bookMarkArray);
    }
  };

  return (
    <div>
      <div className="blogs-parent">
        <div className="blogs-container">
          {blogs?.map((blog) => (
            <Blog
              handleReadTime={handleReadTime}
              blog={blog}
              key={blog.id}
              handleBookMark={handleBookMark}
            ></Blog>
          ))}
        </div>
        <div className="blog-count">
          <Calculate readTime={readTime} bookMarkDb={bookMarkDb}></Calculate>
        </div>
      </div>
      <div>
        <QuestionAnswer></QuestionAnswer>
      </div>
    </div>
  );
};

export default Blogs;

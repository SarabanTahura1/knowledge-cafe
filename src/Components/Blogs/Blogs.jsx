import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Calculate from "../Calculate/Calculate";

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
  const handleBookMark=(id ,title)=>{
    console.log(id , title)
  }

  return (
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
        <Calculate readTime={readTime}></Calculate>
      </div>
    </div>
  );
};

export default Blogs;

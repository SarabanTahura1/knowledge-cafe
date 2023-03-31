import React from 'react';
import "./Blog.css"

const Blog = ({blog ,handleReadTime ,handleBookMark}) => {
    // const { name, BCimage, Aimage, title, readTime, date } = props.blog;

    return (

        <div className="blog-container">
            <div className="blog-data">
                <img src={blog.BCimage} alt="" />
                <div className="read-info">
                    <div className="author-information">
                        <div className="author-img">
                            <img src={blog.Aimage} alt="" />
                        </div>
                        <div className="author-title">
                            <h3 className='author-name'>{blog.name}</h3>
                            <small className='published-Date'>{blog.date}</small>
                        </div>
                    </div>
                    <div className="read-time">
                        <small>{blog.readTime}min read</small>
                        <img src='bookmark.svg' onClick={()=>handleBookMark(blog.id, blog.title)}/>

                    </div>

                </div>
                <div>
                    <h2>{blog.title}</h2>
                    <div className='hashtag'>
                        <small>#beginners</small>
                        <small>#programming</small>
                    </div>
                    <button onClick={()=>handleReadTime(blog.readTime)}><u>Mark as read</u>
                    </button>
                </div>
                <div className="border"></div>
            </div>

        </div>



    );
};

export default Blog;
import React from 'react';
import "./Blog.css"
const Blog = (props) => {
    const { name, BCimage, Aimage, title, readTime, date } = props.blog;

    return (

        <div className="blog-container">
            <div className="blog-data">
                <img src={BCimage} alt="" />
                <div className="read-info">
                    <div className="author-information">
                        <div className="author-img">
                            <img src={Aimage} alt="" />
                        </div>
                        <div className="author-title">
                            <h3 className='author-name'>{name}</h3>
                            <small className='published-Date'>{date}</small>
                        </div>
                    </div>
                    <div className="read-time">
                        <small>{readTime}min read</small>
                        <button>Bookmark</button>

                    </div>

                </div>
                <div>
                    <h2>{title}</h2>
                    <div className='hashtag'>
                        <small>#beginners</small>
                        <small>#programming</small>
                    </div>
                    <button><u>Mark as read</u>
                    </button>
                </div>
                <div className="border"></div>
            </div>

        </div>



    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import "./Blogs.css";
import Blog from '../Blog/Blog';

const Blogs = (props) => {
    console.log(props);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setBlogs(data))


    }, [])
    return (
        <div className='blogs-parent'>

            <div className='blogs-container'>
                {
                    blogs?.map(blog => <Blog
                        blog={blog}
                        key={blog.id}

                    ></Blog>)
                }
            </div>
            <div className="blog-count">
                <div className='spent-time'><h3>Spent time on read :  min</h3></div>
                <div className='bookmark-container'><h3> Bookmarked Blogs : </h3></div>
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div className="card">
            <img src={blog.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="">
                    <div className="">
                        <img src={blog.author_img} alt="" />
                    </div>
                    <div>
                        <h3 className="">{blog.author}</h3>
                        <p>{blog.publish_date}</p>
                    </div>
                </div>
                <div className="">
                    <p>{blog.read_time} min read <FontAwesomeIcon icon={faBookmark} /></p>
                </div>
            </div>
            <div className="card-body">
                <h2>{blog.name}</h2>
                <a href="#" className="card-link">Mark as read</a>
            </div>
        </div>
    );
};

export default Blog;
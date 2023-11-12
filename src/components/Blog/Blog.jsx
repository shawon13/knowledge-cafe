import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = ({ blog, nameAddToCart, timeAddToCart }) => {
    return (
        <div className="blog">
            <img src={blog.img} className="blog-img" alt="..." />
            <div className="blog-body">
                <div className="author-details">
                    <div>
                        <img className="author-img" src={blog.author_img} alt="" />
                    </div>
                    <div style={{ marginLeft: '15px' }}>
                        <h6 className="author-name">{blog.author}</h6>
                        <p className='publish-date'>{blog.publish_date}</p>
                    </div>
                </div>
                <div>
                    <p className='read-time'><span>{blog.read_time}</span> min read <FontAwesomeIcon style={{ cursor: 'pointer', marginLeft: '8px' }} onClick={() => nameAddToCart(blog)} icon={faBookmark} /></p>
                </div>
            </div>
            <div className="blog-footer">
                <h2 className='blog-name'>{blog.name}</h2>
                <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => timeAddToCart(blog)}>Mark as read</a>
            </div>
        </div>
    );
};

export default Blog;
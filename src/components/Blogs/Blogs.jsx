import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import { addToDb, addToDb2, getKnowladgeCart, getKnowladgeCart2 } from '../../utilities/fakedb';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('knowladgeCafe.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // blog add to stored cart
    useEffect(() => {
        const storedCart = getKnowladgeCart();
        let savedCart = [];
        // step-1 get id in storedCart
        for (const id in storedCart) {
            const addedBlog = blogs.find(blog => blog.id === id);
            if (addedBlog) {
                const quantity = storedCart[id];
                addedBlog.quantity = quantity;
                savedCart.push(addedBlog);
            }
        }
        setCart(savedCart);
    }, [blogs])

    // time add to stored cart
    useEffect(() => {
        const storedCart = getKnowladgeCart2();
        let savedCart = [];
        // step-1 get id in storedCart
        for (const id in storedCart) {
            const addedBlog = blogs.find(blog => blog.id === id);
            if (addedBlog) {
                const quantity = storedCart[id];
                addedBlog.quantity = quantity;
                savedCart.push(addedBlog);
            }
        }
        setCarts(savedCart);
    }, [blogs])

    // name add to cart
    const nameAddToCart = (blog) => {
        let newCart = []
        const exists = cart.find(b => b.id === blog.id);
        if (!exists) {
            blog.quantity = 1;
            newCart = [...cart, blog]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(b => b.id !== blog.id);
            newCart = [...remaining, exists]
            toast.success('sorry already added!', {
                position: "top-center",
                theme: "colored",
            });
            return;
        }
        setCart(newCart);
        addToDb(blog.id);
    }

    // time add to cart
    const timeAddToCart = (blog) => {
        let newCart = []
        const exists = carts.find(b => b.id === blog.id);
        if (!exists) {
            blog.quantity = 1;
            newCart = [...carts, blog]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = carts.filter(b => b.id === blog.id);
            newCart = [...remaining, exists]
        }
        setCarts(newCart);
        addToDb2(blog.id)
    }
    return (
        <div className='blogs-container'>
            <div className='blog-container'>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        nameAddToCart={nameAddToCart}
                        timeAddToCart={timeAddToCart}
                    ></Blog>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} carts={carts}></Cart>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Blogs;
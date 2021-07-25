import React from 'react';
import './Blogs.css';
import img2 from '../../../images/Ellipse 2.png';
import img3 from '../../../images/Ellipse 3.png';
import Blog from '../Blog/Blog';


const blogPost =[
    {   
        id:1,
        name:"Roksana Hasan",
        date: "22 Aug, 2020",
        background:"success",
        color:"white",
        title:"Check the latest doctor in a uaar for your teeth",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quo. "
    },
    {
        id: 2,
        name: "Jenifer",
        date: "22 Aug, 2020",
        img: img3,
        color: "gray",
        title: "Check the latest doctor in a uaar for your teeth",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quo. "
    },
    {
        id: 3,
        name: "Rosy",
        date: "22 Aug, 2020",
        img: img2,
        color: "gray",
        title: "Check the latest doctor in a uaar for your teeth",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quo. "
    }
]

const Blogs = () => {
    return (
        <section className="mt-5 mb-5 blog-container">
            <div className="text-center mt-5 mb-5">
                <h6 style={{ color: "#17D2BA" }}>OUR BLOG</h6>
                <h2 style={{ color: "#3A4256" }}>From Our Blog News</h2>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    {
                        blogPost.map(blog => <Blog key={blog.id} post={blog}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;
import React from 'react';
import './Blog.css';
import { BsArrowRight } from 'react-icons/bs';

const Blog = ({post}) => {
    return (
        <div className="col-md-4 ">
            <div className={`blogBG post-${post.background} p-4`}>
                <div className="d-flex">
                    <img className="img-fluid" src={post.img} alt="" />
                    <div className="ms-3">
                        <h6>{post.name}</h6>
                        <small className="text-secondary">{post.date}</small>
                        <hr />
                    </div>
                </div>
                <div className="p-3">
                    <strong >{post.title}</strong> <br />
                    <small className="text-secondary mt-3">{post.description}</small>
                    <br />
                    <br />
                    <BsArrowRight className="icons"/>
                </div>
            </div>
        </div>
    );
};

export default Blog;
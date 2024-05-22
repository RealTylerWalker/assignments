import React from "react";
import BlogPost from "./BlogPost.jsx";
import blogData from "../../blogData.js";
import "./Hero.css";

function Hero() {
  const posts = blogData.map((post) => {
    return (
      <BlogPost
        title={post.title}
        subTitle={post.subTitle}
        author={post.author}
        date={post.date}
      />
    );
  });
  return <div className="hero-container">{posts}</div>;
}

export default Hero;

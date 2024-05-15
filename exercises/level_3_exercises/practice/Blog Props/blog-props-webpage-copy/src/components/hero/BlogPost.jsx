import React from "react";

function BlogPost(props) {
  return (
    <div className="blogpost-entry-container">
      <a href="title">
        <h3 className="post-title">{props.title}</h3>
      </a>
      <h2 className="post-description">{props.subTitle}</h2>
      <div className="post-author-date-container">
        <span>Posted by</span>
        <span className="post-author">{props.author}</span>
        <span className="post-date">on {props.date}</span>
      </div>
      <hr className="post-separator" />
    </div>
  );
}
export default BlogPost;

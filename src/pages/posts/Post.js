import React from "react";
import "./Post.css";

/**
 * {
 *    title: string,
 *    date: string, // mm-dd-yyyy
 *    content: string,
 *  },
 */
function Post({ title, date, content }) {

  return (
    <div className="Post">
      <h4 className="post-title">{title.toUpperCase()}</h4>
      <h4 className="post-date">{date}</h4>
      <div className="post-content">
        {content}
      </div>
    </div>
  );
}

export default Post;

import React, { useEffect } from 'react';
import { ScreenContext } from "../../App";
import "./Post.css";

/**
 * {
 *    title: string,
 *    date: string, // mm-dd-yyyy
 *    content: string,
 *  },
 */
function Post({ title, date, content }) {

  const { screenItems, dispatch } = React.useContext(ScreenContext);

  useEffect(() => {
    // enable scroll
    dispatch({
      type: "SET_CONTENT_SCROLLABLE",
      isContentScrollable: true,
    });

    return () => {
      // disable scroll
      dispatch({
        type: "SET_CONTENT_SCROLLABLE",
        isContentScrollable: false,
      });
    }
  }, []);

  return (
    <div className="Post">
      <h4 className="post-title">{title.toUpperCase()}</h4>
      <h4 className="post-date">{date}</h4>
      <div className="post-content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div>
          <br/>
          - majiasheng
        </div>
      </div>
    </div>
  );
}

export default Post;

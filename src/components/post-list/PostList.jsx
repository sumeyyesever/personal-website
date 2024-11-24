import { useState, useEffect } from "react";
import "./postList.css";
import { Link } from "react-router-dom";
import { postData } from "../../../post_data";

export default function PostList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let filteredData;
    if (props.name !== "all") {
      filteredData = postData.filter(post => post.tag === props.name);
    } else {
      filteredData = postData;
    }

    if (props.page === "home") {
      filteredData = filteredData.slice(0, 10);
    }

    setData(filteredData);
  }, [props.name, props.page]);

  return (
    <div className='post-list-container'>
      <ul className='post-list'>
        {data.map((post) => (
          <li key={post.id} className='post-list-item'>
            <div className="post-list-item-left">
              <Link to={`/categories/${post.tag}`} className="link">
                <span className='post-list-tag'>{post.tag}</span>
              </Link>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <span className="post-list-item-title">{post.title}</span>
              </a>
            </div>
            <span className='post-list-time'>{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

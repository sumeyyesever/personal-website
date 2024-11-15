import { useState, useEffect } from "react";
import "./postList.css"
import { Link } from "react-router-dom";
import { postData } from "../../../post_data";

export default function PostList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.name !== "all") {
      const filtered = postData.filter(post => post.tag === props.name);
      setData(filtered);
    } else {
      setData(postData);
    }
  }, [postData]); 


  /* if (props.name != "all"){    
    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_DATABASE_URL}/api/categories/${props.name}`)
      .then((response) => {
        console.log(props.name);
        
        setData(response.data);
      })
      .catch((error)=>{
        console.error('Error fetching data with axios:', error);
      });
    }, [props.name]);
  }else {
    useEffect(()=>{
      axios.get(`${import.meta.env.VITE_DATABASE_URL}/api/posts`)
      .then((response) => {
        setData(response.data);   
      })
      .catch((error) => {
        console.error('Error fetching data with axios:', error);
      });
    }, []);
  } */


  return (
    <div className='post-list-container'>
      <ul className='post-list'>
      {data.map((post)=>(
        <li key={post.id} className='post-list-item'>
            <div className="post-list-item-left">
                <Link to={`/categories/${post.tag}`} className="link"> <span className='post-list-tag'>{post.tag}</span></Link>
               <a href={post.link} target="_blank"><span className="post-list-item-title">{post.title}</span></a>
               
                {/* <Link to={`/categories/${post.category}`} className="link"> <span className='post-list-tag'>{post.category}</span></Link>
               <Link to={`/posts/${post.id}`} className="post-list-item-title link">{post.title}</Link>  */}
            </div>
            <span className='post-list-time'>{post.date}</span>
        </li>
      ))}
      </ul>
    </div>
  )
}
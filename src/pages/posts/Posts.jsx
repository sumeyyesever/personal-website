import { useEffect, useState } from "react";
import Header from "../../components/header/Header"
import PostList from "../../components/post-list/PostList"
import "./posts.css"
import { Link } from "react-router-dom";
import { postData } from "../../../post_data";
import Footer from "../../components/footer/Footer";

export default function Posts() {
    const [uniqueTags, setUniqueTags] = useState([]);
    const [tags, setTags] = useState([]);
    
    useEffect(() => {
        const newTags = postData.map(post => post.tag);
        setTags(newTags);
      }, []); 

      useEffect(() => {
        function makeTagsUnique() {
            let tagsArray = tags.map(tag => tag);
            const uniqueTagsArray = [...new Set(tagsArray)];
            setUniqueTags(uniqueTagsArray);
        };
        makeTagsUnique();  
    }, [tags]);
     
      
  return (
    <>
        <Header />
        <div className="posts-page-container">
            <h1 className="posts-page-title">Blog (from notion)</h1>
            <div className="posts-tags-container">
            {uniqueTags.map((tag, index) => (
                <Link to={`/categories/${tag}`} className="link"> 
                    <span key={index} className="single-tag">{tag}</span>
                </Link>
          ))}        
            </div>
            <PostList name="all" page="posts" />
        </div>
        <Footer />
    </>
  )
}
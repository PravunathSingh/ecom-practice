import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Category from './Category';
// import Spinner from '../ui/Spinner';

const CategoriesSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const axiosPosts = async () => {
      const response = await axios(
        'https://jsonplaceholder.typicode.com/users'
      );
      setPosts(response.data);
    };
    console.log(posts);
    axiosPosts();
  }, []);

  const useaxiosPosts = posts.map((post) => {
    return (
      <div>
        <h3>{post.id}</h3>
        <h4>{post.name}</h4>
        <p>{post.phone}</p>
      </div>
    );
  });

  return (
    <>
      <h1>Axios With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div className='axioscontainer'>{posts && useaxiosPosts}</div>
    </>
  );
};

export default CategoriesSection;

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Edit from './editPost';

export default function GetAllPosts() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <div>
      <h1>Posts:</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.img} alt="" />
          <p>{post.description}</p>
          <Edit
            id={post.id}
            title={post.title}
            img={post.img}
            description={post.description}
          />
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Edit from './editPost';

export default function GetAllPosts() {
  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <p className="pt-2 flex flex-row flex-wrap">
      {posts.map((post) => (
        <p className="w-[250px] rounded-md border-solid border-2 border-indigo-600">
          <p key={post.id}> </p>
          <h2 className="flex justify-center items-center font-bold text-xl pb-2">
            {post.title}
          </h2>
          <img
            className="flex justify-center items-center"
            src={post.img}
            alt=""
          />
          <p className="flex justify-center items-center py-2 text-lg">
            {post.description}
          </p>
          <div className="flex justify-center items-center py-3">
            <Edit
              id={post.id}
              title={post.title}
              img={post.img}
              description={post.description}
            />
          </div>
        </p>
      ))}
    </p>
  );
}

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/postSlice';

export default function NewPost() {
  const dispatch = useDispatch();

  const [inAddPostMode, setInAddPostMode] = useState(false);
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');

  const handleClickAddPost = () => {
    setInAddPostMode(true);
  };

  const handleClickSave = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const id = uuidv4();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    dispatch(addPost({ id, title, img, description }));
    setInAddPostMode(false);
  };

  const handleClickCancel = () => {
    setInAddPostMode(false);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl flex justify-center items-center pt-4 pb-3">
        Posts:
      </h1>
      {inAddPostMode ? (
        <div className="p-3 bg-white shadow rounded-lg space-y-5 border-solid border-2 border-indigo-600">
          <p className="flex justify-center items-center text-lg">New Post</p>
          <div className="flex justify-center items-center">
            <input
              className="border-solid border-2 border-light-gray-600"
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              className="border-solid border-2 border-light-gray-600"
              type="text"
              placeholder="Enter image link"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              className="border-solid border-2 border-light-gray-600"
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex space-x-4 flex justify-center items-center">
            <button
              className="border-solid border-2 border-indigo-600 px-2 rounded-full hover:font-bold"
              type="button"
              onClick={handleClickSave}
            >
              Save
            </button>
            <button
              className="border-solid border-2 border-indigo-600 px-2 rounded-full hover:font-bold"
              type="button"
              onClick={handleClickCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-3">
          <button
            className="border-solid border-2 border-indigo-600 px-2 rounded-full hover:font-bold text-lg"
            type="button"
            onClick={handleClickAddPost}
          >
            Add Post
          </button>
        </div>
      )}
    </div>
  );
}

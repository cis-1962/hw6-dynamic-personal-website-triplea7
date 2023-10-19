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
      {inAddPostMode ? (
        <div>
          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter image link"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="button" onClick={handleClickSave}>
            Save
          </button>
          <button type="button" onClick={handleClickCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <button type="button" onClick={handleClickAddPost}>
            Add Post
          </button>
        </div>
      )}
    </div>
  );
}

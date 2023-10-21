import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost, Post } from '../features/postSlice';

export default function Edit({ id, title, img, description }: Post) {
  const dispatch = useDispatch();

  const [inEditMode, setInEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newImg, setNewImg] = useState(img);
  const [newDescription, setNewDescription] = useState(description);

  const handleClickEditPost = () => {
    setInEditMode(true);
  };

  const handleClickCancel = () => {
    setInEditMode(false);
  };

  const handleClickDelete = () => {
    dispatch(deletePost({ id, title, img, description }));
    setInEditMode(false);
  };

  const handleClickSave = () => {
    dispatch(
      editPost({
        id,
        title: newTitle,
        img: newImg,
        description: newDescription,
      }),
    );
    setInEditMode(false);
  };

  return (
    <div>
      {inEditMode ? (
        <div>
          <h2 className="flex justify-center items-center font-bold">
            Edit Post
          </h2>
          <div>
            <div className="flex justify-center items-center py-2">
              <input
                className="border-solid border-2 border-light-gray-600"
                type="text"
                placeholder={title}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center py-2">
              <input
                className="border-solid border-2 border-light-gray-600"
                type="text"
                placeholder={img}
                value={newImg}
                onChange={(e) => setNewImg(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center py-2">
              <input
                className="border-solid border-2 border-light-gray-600"
                type="text"
                placeholder="Enter description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <div className="flex space-x-4 flex justify-center items-center pt-2">
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
              <button
                className="border-solid border-2 border-indigo-600 px-2 rounded-full hover:font-bold"
                type="button"
                onClick={handleClickDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button
            className="border-solid border-2 border-indigo-600 px-2 rounded-full hover:font-bold text-lg"
            type="button"
            onClick={handleClickEditPost}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

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
          <h2>Edit Post</h2>
          <div>
            <input
              type="text"
              placeholder={title}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder={img}
              value={newImg}
              onChange={(e) => setNewImg(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button type="button" onClick={handleClickSave}>
              Save
            </button>
            <button type="button" onClick={handleClickCancel}>
              Cancel
            </button>
            <button type="button" onClick={handleClickDelete}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button type="button" onClick={handleClickEditPost}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

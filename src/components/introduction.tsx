import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveIntro } from '../features/introductionSlice';
import { RootState } from '../app/store';

export default function Intro() {
  const dispatch = useDispatch();
  const { img: introImg, description: introDescription } = useSelector(
    (state: RootState) => state.intro,
  );

  const [inEditMode, setInEditMode] = useState(false);
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const handleClickEdit = () => {
    setInEditMode(true);
  };

  const handleClickSave = () => {
    dispatch(saveIntro({ img, description }));
    setInEditMode(false);
  };

  const handleClickCancel = () => {
    setInEditMode(false);
  };

  return (
    <div>
      <h1>It&apos;s me, hi!</h1>
      {inEditMode ? (
        <div>
          <input
            type="text"
            placeholder="Enter image url"
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
          <img src={introImg} alt="Put something here!" />
          <p>{introDescription}</p>
          <button type="button" onClick={handleClickEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

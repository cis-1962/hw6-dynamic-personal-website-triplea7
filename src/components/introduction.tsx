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
      <h1 className="font-bold text-3xl flex justify-center items-center pt-4">
        It&apos;s me, hi!
      </h1>
      {inEditMode ? (
        <div className="p-3 bg-white shadow rounded-lg space-y-5">
          <div className="flex justify-center items-center">
            <input
              className="border-solid border-2 border-light-gray-600"
              placeholder="Enter image url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              className="border-solid border-2 border-light-gray-600"
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
        <div>
          <div className="flex justify-center items-center ">
            <img
              className="scale-90 border-solid border-2 border-indigo-600 "
              src={introImg}
              alt="Put something here!"
            />
          </div>
          <p className="flex justify-center items-center pb-4 text-xl ">
            {introDescription}
          </p>
          <div className="flex justify-center items-center">
            <button
              className="border-solid border-2 border-indigo-600 px-2 rounded-full hover:font-bold text-lg"
              type="button"
              onClick={handleClickEdit}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import {ADD_IMAGE, DELETE_IMAGE} from './actionTypes';

export const addImage = (imgData) => {
  return {
    type: ADD_IMAGE,
    image: imgData.image,
    firstname: imgData.firstname,
    lastname: imgData.lastname,
    email: imgData.email,
    age: imgData.age,
  };
};
export const deleteImage = (key) => {
  return {
    type: DELETE_IMAGE,
    imageKey: key,
  };
};

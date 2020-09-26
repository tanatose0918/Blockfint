import {ADD_IMAGE, DELETE_IMAGE} from '../actions/actionTypes';

const initailState = {
  images: [],
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      console.log('Already Add Image');
      const result = {
        ...state,
        images: state.images.concat({
          image: action.image,
          firstname: action.firstname,
          lastname: action.lastname,
          email: action.email,
          age: action.age,
          key: Math.random().toString(),
        }),
      };
      console.log(result);
      return result;
    case DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image) => image.key !== action.imageKey),
      };
    default:
      return state;
  }
};

export default reducer;

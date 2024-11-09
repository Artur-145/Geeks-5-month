import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('https://randomuser.me/api/?results=50');
    dispatch({
      type: 'FETCH_USERS',
      payload: res.data.results,
    });
  } catch (error) {
    console.error(error);
  }
};

export const filterUsers = (query) => ({
  type: 'FILTER_USERS',
  payload: query,
});

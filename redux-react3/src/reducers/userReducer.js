const initialState = {
	users: [],
	filteredUsers: [],
	filterQuery: '',
  };
  
  const userReducer = (state = initialState, action) => {
	switch (action.type) {
	  case 'FETCH_USERS':
		return {
		  ...state,
		  users: action.payload,
		  filteredUsers: action.payload,
		};
	  case 'FILTER_USERS':
		return {
		  ...state,
		  filterQuery: action.payload,
		  filteredUsers: state.users.filter((user) =>
			user.name.first.toLowerCase().includes(action.payload.toLowerCase())
		  ),
		};
	  default:
		return state;
	}
  };
  
export default userReducer;
  
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterUsers } from '../actions/userActions';
import { FormControl } from 'react-bootstrap';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterUsers(e.target.value));
  };

  return (
    <FormControl
      type="text"
      placeholder="Filter by name"
      onChange={handleFilterChange}
    />
  );
};

export default Filter;

import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from './store/store';
import UserList from './components/UserList';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Provider store={store}>
    <Container>
      <h1 className="my-4">Random Users</h1>
      <Filter />
      <UserList />
    </Container>
  </Provider>
);

export default App;

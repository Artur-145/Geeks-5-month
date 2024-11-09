import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { Card, Col, Row, Button } from 'react-bootstrap';

const UserList = () => {
  const dispatch = useDispatch();
  const { filteredUsers } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Row>
      {filteredUsers.map((user, index) => (
        <Col md={4} key={index}>
          <Card className="mb-3">
            <Card.Img variant="top" src={user.picture.medium} />
            <Card.Body>
              <Card.Title>{user.name.first} {user.name.last}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
              <Button variant="primary" href={`mailto:${user.email}`}>
                Contact
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserList;

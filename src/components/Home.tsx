import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../services/auth';
import '../styles/Home.css';

const Home: React.FC = () => {
  const history = useHistory();
  const { currentUser } = useAuth();

  if (!currentUser) {
    history.push('/login');
  }

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>You are logged in as {currentUser?.email}</p>
    </div>
  );
};

export default Home;
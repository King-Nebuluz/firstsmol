import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOut } from '../services/auth';

const Logout: React.FC = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await signOut();
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button id="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
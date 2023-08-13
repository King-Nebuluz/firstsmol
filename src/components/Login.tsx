import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../services/auth';
import '../styles/login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
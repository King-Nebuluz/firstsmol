import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp } from '../services/auth';
import '../styles/SignUp.css';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignUp}>
        <input
          id="email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
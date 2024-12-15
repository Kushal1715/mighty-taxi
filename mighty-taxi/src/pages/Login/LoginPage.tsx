import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/authSlice';
import { getAccessToken } from '@/api/auth';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const accessToken = await getAccessToken(username, password);
      const refreshToken = 'some_refresh_token'; // Replace with actual refresh token logic
      dispatch(login({ accessToken, refreshToken }));
    } catch (err) {
      setError('Failed to log in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginPage;

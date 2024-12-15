import axios from 'axios';

// Define types for the response data
interface TokenResponse {
  access: string;
}

// Function to get the access token
export const getAccessToken = async (username: string, password: string): Promise<string> => {
  try {
    const response = await axios.post<TokenResponse>('http://127.0.0.1:8000/api/token/', {
      username,
      password,
    });
    return response.data.access;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

// Function to refresh the access token
export const refreshAccessToken = async (refreshToken: string): Promise<string> => {
  try {
    const response = await axios.post<TokenResponse>('http://127.0.0.1:8000/api/token/refresh/', {
      refresh: refreshToken,
    });
    return response.data.access;
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};

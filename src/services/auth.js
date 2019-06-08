import axios from "axios";

export const TOKEN_KEY = "@airbnb-Token";
export const isAuthenticated = async () => {
  const storage = getToken();
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/token/validate`,
    {
      token: `${storage}`
    }
  );
  const { token } = response.data;
  if (token === "valid") {
    return true;
  } else {
    return false;
  }
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

import axios from "axios";

const API_KEY = "AIzaSyCK5KjEs4sXWwJDgmC388Z-0j9gHB7Ml6M";

export const createUser = async ({ email, password }) => {
  await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
};

export const login = async ({ email, password }) => {
  const { data } = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return data;
};

export const saveUser = (payload) => {
  return localStorage.setItem("users", JSON.stringify(payload));
};

export const saveToken = (payload) => {
  return localStorage.setItem("token", JSON.stringify(payload));
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUsers = () => {
  return localStorage.getItem("users");
};

export const removeUsers = () => {
  return localStorage.removeItem("users");
};

export const removeToken = () => {
  return localStorage.removeItem("token");
};

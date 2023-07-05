const URL = "http://localhost:9999/api/users/";

export const getUsers = async () => {
  const users = await fetch(URL).then(response => response.json());
  return users;
};

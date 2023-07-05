const URL = "http://localhost:9999/api/userinfo/";

export const getUserPicture = async (user) => {
  const { picture } = await fetch(URL + user).then(response => response.json());
  return picture;
};

export const getUsersData = async (users) => {
  const data = {};

  for (const user of users) {
    data[user] = { picture: await getUserPicture(user) };
  }

  return data;
};

export default getMatchUserInfo = (users, userLoggedIn) => {
  const newUsers = { ...users };
  delete new newUsers[userLoggedIn]();
  const [id, user] = Object.entries(newUSers).flat();

  return { ud, ...user };
};

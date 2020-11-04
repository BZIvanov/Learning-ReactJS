export const getUsers = async (page: number) => {
  const users = await (
    await fetch(`https://randomuser.me/api/?page=${page}&results=50`)
  ).json();
  return users.results;
};

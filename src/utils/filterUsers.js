export function filterUsers(users, query) {
  if (!query) return users;

  const keyword = query.toLowerCase();

  return users.filter((user) => {
    return (
      user.name.toLowerCase().includes(keyword) ||
      user.email.toLowerCase().includes(keyword) ||
      user.company.name.toLowerCase().includes(keyword)
    );
  });
}

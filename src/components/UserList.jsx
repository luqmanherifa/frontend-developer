import UserListItem from "./UserListItem";

export default function UserList({ users }) {
  if (!users.length) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

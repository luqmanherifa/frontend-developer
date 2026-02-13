import UserListItem from "./UserListItem";

export default function UserList({ users, onSelect }) {
  if (!users.length) {
    return <p className="text-center py-8 text-slate-500">No users found.</p>;
  }

  return (
    <ul className="space-y-3">
      {users.map((user) => (
        <UserListItem key={user.id} user={user} onSelect={onSelect} />
      ))}
    </ul>
  );
}

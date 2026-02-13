export default function UserListItem({ user, onSelect }) {
  return (
    <li onClick={() => onSelect(user)}>
      <strong>{user.name}</strong> — {user.email} ({user.company.name})
    </li>
  );
}

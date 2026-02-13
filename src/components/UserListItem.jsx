export default function UserListItem({ user }) {
  return (
    <li>
      <strong>{user.name}</strong> - {user.email} ({user.company.name})
    </li>
  );
}

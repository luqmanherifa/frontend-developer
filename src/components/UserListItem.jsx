export default function UserListItem({ user, onSelect }) {
  return (
    <li
      onClick={() => onSelect(user)}
      className="border border-slate-200 rounded-md px-4 py-3 cursor-pointer hover:border-rose-300 hover:bg-rose-50 transition-colors"
    >
      <strong className="text-slate-900">{user.name}</strong>
      <span className="text-slate-500"> — {user.email}</span>
      <span className="text-slate-400"> ({user.company.name})</span>
    </li>
  );
}

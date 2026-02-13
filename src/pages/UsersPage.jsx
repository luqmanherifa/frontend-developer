import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { filterUsers } from "../utils/filterUsers";
import SearchInput from "../components/SearchInput";
import UserList from "../components/UserList";
import UserModal from "../components/UserModal";

export default function UsersPage() {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = filterUsers(users, search);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <SearchInput value={search} onChange={setSearch} />
      <UserList users={filteredUsers} onSelect={setSelectedUser} />

      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </>
  );
}

import Link from 'next/link';

type User = {
  id: number;
  firstName: string;
};

const UserList = async () => {
  const res = await fetch('https://dummyjson.com/users');
  const data = await res.json();
  const users: User[] = data.users;

  return (
    <div>
      <ul className="space-y-3">
        {users.map((u) => (
          <li key={u.id} className="p-4 border rounded-lg hover:bg-gray-50">
            <Link
              href={`/users/${u.id}`}
              className="text-blue-600 hover:underline font-medium"
            >
              {u.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

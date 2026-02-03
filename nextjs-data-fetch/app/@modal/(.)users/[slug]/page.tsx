type User = {
  id: number;
  firstName: string;
  lastName: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  let user: User;

  try {
    const res = await fetch(`https://dummyjson.com/users/${slug}`);
    const data = await res.json();
    user = data;
  } catch (err) {
    console.log(err);
    throw new Error('Unable to show user');
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">User Info</h2>

        <div className="space-y-2">
          <p>
            <strong>ID: </strong>
            {user.id}
          </p>
          <p>
            <strong>First Name: </strong>
            {user.firstName}
          </p>
          <p>
            <strong>Last Name: </strong>
            {user.lastName}
          </p>
        </div>

        <div className="mt-6 text-right">
          <a
            href="/users"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;

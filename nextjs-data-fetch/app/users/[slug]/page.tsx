type User = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
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
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {user.firstName} {user.lastName}
      </h1>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Age: </strong>
          {user.age}
        </p>
        <p>
          <strong>Gender: </strong>
          {user.gender}
        </p>
        <p>
          <strong>Email: </strong>
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default page;

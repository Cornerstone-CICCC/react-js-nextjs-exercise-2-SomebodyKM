import { Suspense } from 'react';
import UserList from './components/UserList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users | NestJS Data Fetch',
  description: 'This is the users page.',
};

const page = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default page;

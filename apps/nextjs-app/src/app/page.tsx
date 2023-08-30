import Image from 'next/image';
import { db, users } from 'database';

async function getData() {
  const usersData = await db.select().from(users);
  return { users: usersData };
}

export default async function Home() {
  const { users } = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex place-items-center before:absolute mb-20">
        <Image
          className="relative invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={340}
          height={37}
          priority
        />
      </div>

      <div>
        <div>Users:</div>
        <div>
          {users.map((user) => (
            <div key={user.id}>
              {user.id} - {user.name}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

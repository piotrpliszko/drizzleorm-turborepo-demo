import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute ">
        <Image
          className="relative invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={340}
          height={37}
          priority
        />
      </div>

      <div>Next.js app</div>
    </main>
  );
}

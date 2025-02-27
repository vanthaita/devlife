import Link from "next/link";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center text-black">
        <div className="text-center">
          {session?.user ? (
            <>
              <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
              <p className="mt-2 text-lg">Email: {session.user.email}</p>
            </>
          ) : (
            <h1 className="text-2xl font-bold">Welcome, Guest!</h1>
          )}
          <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
        </div>
      </main>
    </HydrateClient>
  );
}
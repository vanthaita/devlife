import Link from "next/link";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import Navbar from "@/section/Navbar";
import NewsMarquee from "@/section/NewsMarquee";
import { BlogGrid } from "@/components/BlogGrid";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <Navbar />
      <NewsMarquee />
      <div className="w-full h-[700px] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <div className="absolute top-10 left-0 z-20 px-8 w-2/3  text-white">
          <span className="hover:underline cursor-pointer">BRTAN BARRETT</span>
        </div>
        <img 
          src='https://picsum.photos/1600/900?random=14' 
          alt='Featured post'
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 z-20 p-8 text-white space-y-4 max-w-4xl">
          <div className="flex gap-4 text-sm font-medium">
            <span className="bg-black/80 px-3 py-1 ">POLITICS</span>
            <span className="bg-black/80 px-3 py-1 ">LAB</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight hover:underline cursor-pointer">
            The DOGE Takeover Is<br />
            <span className="">Norse Than You Think</span>
          </h1>
          <div className="flex gap-4 text-sm">
            <span>March 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <main className="px-4 py-8">
        <div className="flex flex-col gap-y-8 px-4">
          <div className="border-t-2 border-black">
            <span className="px-4 bg-black text-white py-1.5 font-medium text-sm">
              TODAY'S PICKS
            </span>
          </div>
          <BlogGrid />
        </div>
      </main>
    </HydrateClient>
  );
}
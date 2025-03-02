import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const posts = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/400/300?random=1',
    title: 'The Future of Web Development',
    time: 'March 15, 2024',
    readTime: '5 min',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/400/300?random=2',
    title: 'Modern Minimalist Design Principles',
    time: 'March 14, 2024',
    readTime: '4 min',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/400/300?random=3',
    title: 'Building Scalable Applications',
    time: 'March 13, 2024',
    readTime: '6 min',
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/400/300?random=4',
    title: 'The Art of Debugging',
    time: 'March 12, 2024',
    readTime: '7 min',
  },
];

export function BlogGrid() {
  return (
    <BentoGrid className="w-full">
      {posts.map((post) => (
        <BentoGridItem
          key={post.id}
          title={post.title}
          description={`${post.time} • ${post.readTime} read`}
          header={
            <div>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                /> 
              </div>
              <div className="mt-0.5">
                <span className="px-4 bg-black text-white py-1.5 font-medium text-sm border-r border-white/50">
                  SCIENCE
                </span>
                <span className="px-4 bg-black text-white py-1.5 font-medium text-sm border-r border-white/50">
                  MATH
                </span>
                <span className="px-4 bg-black text-white py-1.5 font-medium text-sm">
                  SECURITY
                </span>
              </div>
            </div>
          }
        />
      ))}
    </BentoGrid>
  );
}
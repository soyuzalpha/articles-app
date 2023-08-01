import Card from '@/components/Card';
import React from 'react';
import { fakeDataBlog } from '@/utils/fakeData';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h1 className="flex font-mono text-3xl">Blogs</h1>

        <Link href={'/post'} className="font-sans bg-black text-white px-3 py-2 rounded text-xs font-bold">
          Create Post
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-5">
        {fakeDataBlog.map((item, key) => (
          <div key={key}>
            <Card title={item.title} content={item.content} author={item.author} saved={false} id={item.id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;

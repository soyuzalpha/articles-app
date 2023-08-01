'use client';

import Editor from '@/components/Editor/Editor';
import React from 'react';

const PostId = () => {
  return (
    <div className="bg-white p-3 rounded">
      <div>
        <div className=" flex items-center gap-2">
          <h5 className="font-sans text-[10px] text-gray-900 tracking-tight antialiased">Asep Saepudin</h5>
          <p className="font-sans text-[8px] text-gray-500 tracking-normal">21 January 2022</p>
        </div>

        <h1 className="font-sans antialiased font-bold text-2xl tracking-normal ">
          How to Build a Blog with the Ghost API and Next.js
        </h1>

        <div className="font-sans text-md antialiased tracking-normal mt-5 text-gray-600">
          <Editor isParent={false} description={'Hello world!'} />
        </div>
      </div>
    </div>
  );
};

export default PostId;

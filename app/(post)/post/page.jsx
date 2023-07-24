'use client';

import React, { useState } from 'react';
import Editor from '@/components/Editor';
import { useForm } from 'react-hook-form';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const CreatePost = () => {
  //   const session = getServerSession(authOptions);
  const { register, watch, handleSubmit } = useForm();
  const [body, setBody] = useState('');

  const handleChange = (data) => {
    setBody(data);
  };

  const onSubmit = async () => {
    const data = {
      //   authorId: session.data.user.id,
      title: watch('title'),
      body: body,
    };

    await saveData(data);
    // toast({
    //   title: 'Post Success.',
    //   description: "You've created your post.",
    //   status: 'success',
    //   duration: 5000,
    //   isClosable: true,
    //   position: 'bottom-left',
    // });
  };

  return (
    <div className="px-5 pt-24">
      <h1 className="text-xl mb-5 font-mono">Create Story</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-2 font-sans">
          <label htmlFor="title">Title</label>
          <input
            {...register('title')}
            type="text"
            placeholder="Type intresting title"
            className="border text-sm p-2 rounded-md bg-gray-100 font-sans"
          />
        </div>

        <div className="font-sans text-sm">
          <label htmlFor="content">Content</label>
          <Editor onChange={handleChange} isParent={true} description={'Type your content'} />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

'use client';

import React, { useState } from 'react';
import Editor from '@/components/Editor/Editor';
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
    <>
      <h1 className="text-xl mb-3 font-mono">Create Story</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-2 font-sans">
          <label htmlFor="title">Title</label>
          <input
            {...register('title')}
            type="text"
            placeholder="Type intresting title"
            className="border text-sm p-2 rounded-md bg-gray-200 font-sans"
          />
        </div>

        <div className="font-sans text-sm">
          <label htmlFor="content">Content</label>
          <Editor onChange={handleChange} isParent={true} description={'Hello world!'} />
        </div>

        <div>
          <button type="submit" className="font-sans my-5 w-full h-10 bg-black rounded text-white text-sm">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;

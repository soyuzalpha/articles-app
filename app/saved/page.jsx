import Card from '@/components/Card';
import React from 'react';
import { fakeDataBlog } from '@/utils/fakeData';

const Saved = () => {
  return (
    <>
      <h1 className="font-mono text-3xl mb-3">Saved</h1>

      <div className="grid md:grid-cols-4 gap-5">
        {fakeDataBlog.map((item, key) => (
          <div key={key}>
            <Card title={item.title} content={item.content} author={item.author} saved={true} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Saved;

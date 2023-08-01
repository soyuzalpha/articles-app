'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiSolidBookmarks, BiTrash } from 'react-icons/bi';
import { GoBookmark } from 'react-icons/go';

const Card = ({ title, content, author, saved, id }) => {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  return (
    <>
      <div className="rounded-md shadow-md p-3 bg-white">
        <Link href={`/post/${id}`}>
          <div className="flex flex-col gap-3">
            <div>
              <h5 className="text-xs font-sans text-gray-500 antialiased">{author}</h5>
              <h1 className="font-sans font-semibold text-md antialiased">{title}</h1>
            </div>

            <p className="font-sans text-sm line-clamp-4 antialiased leading-normal text-gray-700 tracking-normal">
              {content}
            </p>

            {saved && (
              <div className="flex items-center max-w-fit gap-2 font-sans text-xs">
                <BiTrash size={20} />
              </div>
            )}
          </div>
        </Link>

        {!saved && (
          <div className="mt-3 flex items-center gap-2">
            <div>
              {bookmark ? (
                <BiSolidBookmarks size={20} onClick={() => setBookmark(!bookmark)} />
              ) : (
                <GoBookmark size={20} onClick={() => setBookmark(!bookmark)} />
              )}
            </div>

            <div>
              {liked ? (
                <AiFillHeart size={20} onClick={() => setLiked(!liked)} color="red" />
              ) : (
                <AiOutlineHeart size={20} onClick={() => setLiked(!liked)} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;

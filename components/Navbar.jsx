import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logOut = async () => {
    return signOut();
  };

  return (
    <>
      <div className="bg-white fixed w-full z-20 ">
        <div className="flex items-center justify-between px-5 py-4 md:max-w-screen-xl m-auto">
          <Link href="/">
            <h1 className="font-bold text-xl font-mono md:text-3xl">A R T I C L E</h1>
          </Link>

          <div className="gap-3 hidden md:flex">
            <Link href="/blog">
              <h1 onClick={() => setIsOpen(!isOpen)} className="text-md font-mono">
                Blog
              </h1>
            </Link>

            <Link href="/saved">
              <h1 onClick={() => setIsOpen(!isOpen)} className="text-md font-mono">
                Saved
              </h1>
            </Link>

            <Link href="/profile">
              <h1 onClick={() => setIsOpen(!isOpen)} className="text-md font-mono">
                Profile
              </h1>
            </Link>

            <button type="button" onClick={() => logOut()} className="font-mono text-md text-red-500">
              Sign Out
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`${
              isOpen ? 'left-0' : '-left-full'
            } fixed block md:hidden bg-gray-200 top-0 w-full h-screen transition-all ease-in-out duration-300`}
          >
            <div className="flex flex-col w-full h-full gap-y-10 items-center justify-center">
              <Link href="/">
                <h1 onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold font-mono">
                  A R T I C L E
                </h1>
              </Link>

              <Link href="/blog">
                <h1 onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold font-mono">
                  B L O G
                </h1>
              </Link>

              <Link href="/saved">
                <h1 onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold font-mono">
                  S A V E D
                </h1>
              </Link>

              <Link href="/profile">
                <h1 onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold font-mono">
                  P R O F I L E
                </h1>
              </Link>

              <button type="button" onClick={() => logOut()} className="font-mono text-2xl text-red-500">
                S i g n - O u t
              </button>

              <div className="w-fit" onClick={() => setIsOpen(!isOpen)}>
                <AiOutlineClose size={25} />
              </div>
            </div>
          </div>

          <div className="block md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <HiMenu size={25} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

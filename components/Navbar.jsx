import React, { useState } from 'react';

// import { signOut } from 'next-auth/react';
// import { HiOutlineLogout } from 'react-icons/hi';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import { BsCloudSun, BsFillCloudMoonFill } from 'react-icons/bs';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white">
        <div className="flex items-center justify-between px-5 py-4">
          <Link href="/">
            <h1 className="font-bold text-xl">A R T I C L E</h1>
          </Link>

          <div
            className={`${
              isOpen ? 'left-0' : '-left-full'
            } fixed block md:hidden bg-gray-200 top-0 w-10/12 h-screen transition-all ease-in-out duration-300`}
          >
            <div>
              <Link href="/blog">
                <h1 className="text-sm">Blog</h1>
              </Link>

              <Link href="/blog">
                <h1 className="text-sm">Saved</h1>
              </Link>
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

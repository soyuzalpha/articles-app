import React from 'react';
import {
  Box,
  SimpleGrid,
  SkeletonText,
  Text,
  useToast,
} from '@chakra-ui/react';
import useSwr from 'swr';
import Link from 'next/link';
import { BsBookmarkFill } from 'react-icons/bs';
import { useSession } from 'next-auth/react';

const Posts = () => {
  const toast = useToast();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSwr('/api/post/getAll', fetcher);
  const session = useSession();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (isLoading) {
    return (
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    );
  }

  const handleFavourites = async (postId) => {
    const data = {
      userId: session.data.user.id,
      postId: postId,
    };
    await fetch('/api/post/favourites', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    toast({
      title: 'Saved to favourites.',
      // description: "We've created your account for you.",
      status: 'success',
      duration: 3000,
      isClosable: false,
      position: 'bottom-left',
    });
  };

  return (
    <>
      <Box>
        <Text
          fontWeight='semibold'
          fontSize={['xl', 'xl', '3xl', '3xl']}
          marginY='3'
          marginX={3}
        >
          All Articles
        </Text>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
        {data &&
          data.map((item, key) => (
            <Box
              key={key}
              rounded='md'
              boxShadow='md'
              display='flex'
              justifyContent='center'
              flexDirection='column'
              paddingY={5}
              paddingX={3}
              gap={3}
            >
              <Link href={`/post/${item.id}`}>
                <Text fontWeight='semibold' fontSize='sm'>
                  {item.title}
                </Text>
              </Link>

              <Box onClick={() => handleFavourites(item.id)}>
                <BsBookmarkFill />
              </Box>
            </Box>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Posts;

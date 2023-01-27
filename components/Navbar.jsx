import React from "react";
import { Box, Container, VStack, Text, Flex } from "@chakra-ui/layout";
import Link from "next/link";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { HiOutlineLogout } from "react-icons/hi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsCloudSun, BsFillCloudMoonFill } from "react-icons/bs";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="1000px" padding={4} marginBottom={3}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link href="/">
            <Text fontWeight="bold" fontSize="xl">
              A R T I C E L S
            </Text>
          </Link>
        </Box>

        <Box
          display={["none", "none", "flex", "flex"]}
          gap={3}
          alignItems="center"
        >
          <Link href="/">
            <Text fontWeight="semibold">Home</Text>
          </Link>
          <Link href="/favourites">
            <Text fontWeight="semibold">Favourites</Text>
          </Link>
          <Link href="/profile">
            <Text fontWeight="semibold">Profile</Text>
          </Link>
        </Box>

        <Flex
          gap={3}
          justifyContent="center"
          alignItems="center"
          display={["none", "none", "flex", "flex"]}
        >
          <Button size="sm" onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <Icon w={5} h={5} as={BsCloudSun} />
            ) : (
              <Icon w={5} h={5} as={BsFillCloudMoonFill} />
            )}
          </Button>

          <Button
            display={["none", "none", "flex", "flex"]}
            colorScheme="red"
            leftIcon={<HiOutlineLogout />}
            size="sm"
            onClick={() =>
              signOut({ callbackUrl: "http://localhost:3000/auth" })
            }
          >
            Sign Out
          </Button>
        </Flex>

        <IconButton
          onClick={onOpen}
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
        />

        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              display="flex"
              justifyContent="space-between"
            >
              <Text fontWeight="extrabold">A R T I C E L S</Text>

              <IconButton
                onClick={toggleColorMode}
                icon={
                  colorMode === "light" ? (
                    <Icon w={5} h={5} as={BsCloudSun} />
                  ) : (
                    <Icon w={5} h={5} as={BsFillCloudMoonFill} />
                  )
                }
              />
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={5} justifyContent="left" alignItems="start">
                <Box onClick={onClose}>
                  <Link href="/">
                    <Text fontWeight="semibold">Home</Text>
                  </Link>
                </Box>
                <Box onClick={onClose}>
                  <Link href="/favourites">
                    <Text fontWeight="semibold">Favourites</Text>
                  </Link>
                </Box>
                <Box onClick={onClose}>
                  <Link href="/profile">
                    <Text fontWeight="semibold">Profile</Text>
                  </Link>
                </Box>
              </VStack>

              <Button
                position="fixed"
                left="5"
                bottom="5"
                colorScheme="red"
                leftIcon={<HiOutlineLogout />}
                size="sm"
                onClick={() =>
                  signOut({ callbackUrl: "http://localhost:3000/auth" })
                }
              >
                Sign Out
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Container>
  );
};

export default Navbar;

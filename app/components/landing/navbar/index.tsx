import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Link,
  ButtonProps,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const newColorMode = useColorModeValue("dark", "light");
  const ColorMOdeSwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              GStars Logo
              <VisuallyHidden>GStars Logo</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              GStars
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1.5}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              {NAVBAR_LINKS.map((link) => (
                <NavBarLink key={link.title}>{link.title}</NavBarLink>
              ))}
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${newColorMode} mode`}
              variant="ghost"
              color="current"
              onClick={toggleMode}
              icon={<ColorMOdeSwitchIcon />}
            />
            <Button colorScheme="brand">Login</Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                {NAVBAR_LINKS.map((link) => (
                  <NavBarLink key={link.title} w="full">
                    {link.title}
                  </NavBarLink>
                ))}
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
};

type NavBarLink = {
  title: string;
};
const NAVBAR_LINKS: NavBarLink[] = [
  { title: "github" },
  { title: "twitter" },
  { title: "sponsor" },
];

const NavBarLink = (props: ButtonProps & { to?: string }) => {
  const { to, ...rest } = props;
  return (
    <Link isExternal to={to} _hover={{ textDecoration: "none" }}>
      <Button variant={"ghost"} textTransform={"capitalize"} {...rest} />
    </Link>
  );
};

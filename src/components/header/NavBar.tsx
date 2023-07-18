import { HStack, Image, Text, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <HStack
        padding={'16px'}
        justifyContent={'space-between'}
        marginBottom={'30px'}
      >
        <Image src={'/logo2.png'} boxSize={'40px'} />
        <Link to={'/login'}>
          <HStack>
            <Text fontSize="l">دخول</Text>
            <Image src={'/lock.jpg'} boxSize={'32px'} />
          </HStack>
        </Link>
      </HStack>
      <Center>
        <Image src={'/bann2.jpg'} boxSizing="border-box" fit={'cover'} />
      </Center>
    </>
  );
};

export default NavBar;

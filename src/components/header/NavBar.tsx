import { HStack, Image, Text, Center } from '@chakra-ui/react';
import logo2 from '../../assets/logo2.png';
import lock from '../../assets/lock.jpg';
import banner2 from '../../assets/bann2.jpg';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <HStack
        padding={'16px'}
        justifyContent={'space-between'}
        marginBottom={'30px'}
      >
        <Image src={logo2} boxSize={'40px'} />
        <Link to={'/login'}>
          <HStack>
            <Text fontSize="l">دخول</Text>
            <Image src={lock} boxSize={'32px'} />
          </HStack>
        </Link>
      </HStack>
      <Center>
        <Image src={banner2} boxSizing="border-box" fit={'cover'} />
      </Center>
    </>
  );
};

export default NavBar;

import { HStack, Image, Text, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
      <HStack
        padding={{
          base: '16px',
          sm: '16px',
          md: '32px',
          lg: '32px',
          xl: '32px',
        }}
        justifyContent={'space-between'}
        marginBottom={'30px'}
      >
        <Image
          src={'/logo2.png'}
          boxSize={{
            base: '40px',
            sm: '40px',
            md: '75px',
            lg: '75px',
            xl: '75px',
          }}
        />
        <Link to={'/login'}>
          <HStack>
            <Text
              fontSize={{ sm: 'lg', md: 'xl', lg: 'xl', xl: 'xl' }}
              fontWeight={'bold'}
            >
              دخول
            </Text>
            <Image
              src={'/lock.jpg'}
              boxSize={{
                base: '32px',
                sm: '32px',
                md: '55px',
                lg: '55px',
                xl: '55px',
              }}
            />
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

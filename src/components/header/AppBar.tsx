import { HStack, Text, Link, SimpleGrid } from '@chakra-ui/react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
const AppBar = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, lg: 3, md: 3, xl: 3 }}
        spacing={'10px'}
        bg={'#005072'}
        color={'white'}
        width={'100%'}
        padding={15}
        fontSize={{ xl: '20px', lg: '20px', md: '20px', sm: '16px' }}
      >
        <HStack justifyContent={'center'}>
          <FaMapMarkerAlt />
          <Text>Syria - Ghabagheb - Daraa Highway</Text>
        </HStack>
        <HStack justifyContent={'center'}>
          <FaPhoneAlt />
          <Text>+(963) 15 68691974</Text>
        </HStack>
        <HStack justifyContent={'center'}>
          <Link
            href="https://www.facebook.com/IUST-Official-1672812356291463/"
            target="_blank"
          >
            <FaFacebook textDecoration={'none'} color={'white'} />
          </Link>
          <Link href="https://twitter.com/IUST5" target="_blank">
            <FaTwitter color={'white'} />
          </Link>
        </HStack>
      </SimpleGrid>

      {/* <VStack bg={'#005072'} color={'white'} width={'100%'} padding={15}>
        <HStack>
          <FaMapMarkerAlt />
          <Text marginRight={15}>Syria - Ghabagheb - Daraa Highway</Text>
        </HStack>
        <HStack>
          <FaPhoneAlt />
          <Text>+(963) 15 68691974</Text>
        </HStack>
        <HStack marginTop={3}>
          <Link
            href="https://www.facebook.com/IUST-Official-1672812356291463/"
            target="_blank"
          >
            <FaFacebook textDecoration={'none'} color={'white'} />
          </Link>
          <Link href="https://twitter.com/IUST5" target="_blank">
            <FaTwitter color={'white'} />
          </Link>
        </HStack>
      </VStack> */}
    </>
  );
};

export default AppBar;

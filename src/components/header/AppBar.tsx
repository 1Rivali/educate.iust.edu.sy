import { HStack, Text, VStack, Link } from '@chakra-ui/react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
const AppBar = () => {
  return (
    <>
      <VStack
        bg={'#005072'}
        color={'white'}
        width={'100%'}
        justifyContent={'center'}
        padding={15}
      >
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
      </VStack>
    </>
  );
};

export default AppBar;

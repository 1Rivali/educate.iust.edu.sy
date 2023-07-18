import logo from '../../public/logo2.png';

import { HStack, Image, Text } from '@chakra-ui/react';
const ProfileAppBar = () => {
  return (
    <HStack padding={3} backgroundColor={'#2f4050'}>
      <Image src={logo} boxSize={8} marginLeft={2} />
      <Text>البوابة الالكترونية</Text>
    </HStack>
  );
};

export default ProfileAppBar;

import { HStack, Text } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

interface Props {
  page?: any;
  children?: any;
}

const ProfileNavigator = ({ page }: Props) => {
  return (
    <HStack backgroundColor={'#2f4050'} p={3} m={3} borderRadius={5}>
      <Link to={'/'}>
        <FaHome fontSize={24} />
      </Link>
      <IoIosArrowBack fontSize={24} />
      <Link to={'/profile'}>
        <Text>الصفحة الرئيسية</Text>
      </Link>
      {page ? (
        <>
          <IoIosArrowBack /> {page}
        </>
      ) : (
        ''
      )}
    </HStack>
  );
};

export default ProfileNavigator;

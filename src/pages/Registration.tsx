import { Link } from 'react-router-dom';
import ProfileAppBar from '../components/ProfileAppBar';
import ProfileNavigator from '../components/ProfileNavigator';
import { Box, Card, CardBody, CardHeader } from '@chakra-ui/react';
import ProfileFooter from '../components/ProfileFooter';

const Registration = () => {
  return (
    <>
      <Box sx={{ direction: 'rtl' }} color={'white'}>
        <ProfileAppBar />
        <ProfileNavigator
          page={<Link to={'/profile/registration'}>التسجيل الالكتروني</Link>}
        />
        <Card
          p={3}
          m={3}
          boxShadow={
            '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
          }
        >
          <CardHeader fontSize={'18px'} fontWeight={'bold'}>
            التسجيل الالكتروني
          </CardHeader>
          <CardBody fontSize={'16px'} fontWeight={'bold'} color={'red'}>
            غير مسموح التسجيل بهذه الفترة
          </CardBody>
        </Card>
        <ProfileFooter />
      </Box>
    </>
  );
};

export default Registration;

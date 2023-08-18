import {
  Box,
  HStack,
  Text,
  Image,
  SimpleGrid,
  Center,
  Card,
  CardHeader,
  CardBody,
  Container,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaEdit,
  FaPlusCircle,
  FaChartBar,
  FaDollarSign,
  FaUsers,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProfileAppBar from '../components/ProfileAppBar';
import ProfileNavigator from '../components/ProfileNavigator';
import { User } from './Marks';
import ProfileFooter from '../components/ProfileFooter';

const Profile = () => {
  const [user, setUser] = useState<User>({
    id: null,
    name: null,
    username: null,
    gpa: null,
    faculty: null,
    specialization: null,
    status: null,
    supervisor: null,
    planProgress: null,
    level: null,
    balance: null,
    semesters: [],
  });
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <>
      <Box sx={{ direction: 'rtl' }} color={'white'}>
        <ProfileAppBar />
        <ProfileNavigator />
        <SimpleGrid
          p={2}
          m={2}
          columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          spacing={3}
        >
          <Box
            boxShadow={
              '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
            }
            background={'linear-gradient(229deg, #fd9a77, #fb827a)'}
            pt={2}
            pr={4}
          >
            <HStack>
              <Text>الرسائل</Text>
              <FaEnvelope />
              <Text>0</Text>
            </HStack>
            <Image src={'/chart-1.svg'} />
          </Box>
          <Box
            boxShadow={
              '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
            }
            background={'linear-gradient(229deg, #8edead, #43c6ac)'}
            pt={2}
            pr={4}
          >
            <HStack>
              <Text>الواجب الدراسي</Text>
              <FaEdit />
              <Text>0</Text>
            </HStack>
            <Center>
              <Image src={'chart-2.svg'} />
            </Center>
          </Box>
          <Box
            boxShadow={
              '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
            }
            backgroundImage={'url(/user-card-header.png)'}
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            pt={2}
            pr={1}
            height={'100px'}
          >
            <Text fontWeight={'bold'} fontSize={24} mt={5}>
              {user.name}
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          paddingX={2}
          mx={2}
          columns={{ sm: 1, md: 2, lg: 2, xl: 2 }}
          spacing={3}
        >
          <Card
            boxShadow={
              '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
            }
          >
            <CardHeader backgroundColor={'#2f4050'}>
              <HStack
                justifyContent={'space-around'}
                fontSize={'2xl'}
                color={'white'}
              >
                <Link to={'/profile/registration'}>
                  <FaPlusCircle />
                </Link>
                <Link to={'/profile/marks'}>
                  <FaChartBar />
                </Link>
              </HStack>
            </CardHeader>
            <CardBody color={'#424242'}>
              <HStack justifyContent={'space-between'} height={'20%'}>
                <FaEdit fontSize={'24px'} color="#757575" />
                <Text>الواجب الدراسي</Text>
                <Text>0</Text>
                <Box backgroundColor={'#1ab394'} h={'4px'} w={'100px'} />
              </HStack>
              <HStack justifyContent={'space-between'} mt={7}>
                <FaDollarSign fontSize={'24px'} color="#757575" />
                <Text>الرصيد</Text>
                <Text>{user.balance}</Text>
                <Box backgroundColor={'#545b61'} h={'4px'} w={'100px'}>
                  <Box backgroundColor={'#1ab394'} h={'4px'} w={'50px'} />
                </Box>
              </HStack>
              <HStack justifyContent={'space-between'} mt={7}>
                <FaUsers fontSize={'24px'} color="#757575" />
                <Text>تنبيهات الغياب</Text>
                <Text>0</Text>
                <Box backgroundColor={'#545b61'} h={'4px'} w={'100px'} />
              </HStack>
            </CardBody>
          </Card>

          <Card
            boxShadow={
              '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
            }
          >
            <CardHeader backgroundColor={'#2f4050'} color={'white'}>
              <Text fontWeight={'bold'}>معلومات الطالب</Text>
            </CardHeader>
            <CardBody>
              <HStack mb={'25px'}>
                <Text>رقم الطالب :</Text>
                <Text>{user.username}</Text>
              </HStack>
              <HStack mb={'25px'}>
                <Text>اسم الطالب :</Text>
                <Text>{user.name}</Text>
              </HStack>
              <HStack mb={'25px'}>
                <Text>الكلية :</Text>
                <Text>{user.faculty}</Text>
              </HStack>
              <HStack mb={'25px'}>
                <Text>التخصص :</Text>
                <Text>{user.specialization}</Text>
              </HStack>
              <HStack mb={'25px'}>
                <Text>الحالة :</Text>
                <Text>{user.status}</Text>
              </HStack>
              <HStack>
                <Text>المستوى :</Text>
                <Text>ترفع للسنة الثالثة</Text>
              </HStack>
            </CardBody>
          </Card>

          <Card
            boxShadow={
              '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
            }
          >
            <CardHeader backgroundColor={'#2f4050'} color={'white'}>
              <Text fontWeight={'bold'} textAlign={'center'}>
                معلومات الطالب الأكاديمية
              </Text>
            </CardHeader>
            <CardBody justifyContent={'space-around'}>
              <Container color={'#6a6a7d'} fontWeight={'bold'} marginY={10}>
                <VStack>
                  <Text>المعدل التراكمي</Text>
                  <Box
                    mt={6}
                    border={'10px solid #009688'}
                    borderLeftColor={'#80CBC4'}
                    borderRadius={'100%'}
                    fontSize={'28px'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    px={'30px'}
                    py={'40px'}
                  >
                    <Text width={'60px'}>{user.gpa}</Text>
                  </Box>
                </VStack>
              </Container>

              <Container color={'#6a6a7d'} fontWeight={'bold'} marginY={10}>
                <VStack>
                  <Text>انجاز الخطة</Text>
                  <Box
                    mt={6}
                    border={'10px solid #e91e63'}
                    borderLeftColor={'#F8BBD0'}
                    borderRadius={'100%'}
                    fontSize={'28px'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    px={'30px'}
                    py={'40px'}
                  >
                    <Text width={'60px'}>{user.planProgress}%</Text>
                  </Box>
                </VStack>
              </Container>

              <Container color={'#6a6a7d'} fontWeight={'bold'} marginY={10}>
                <VStack>
                  <Text>مستوى الطالب</Text>
                  <Box
                    mt={6}
                    border={'10px solid #673ab7'}
                    borderLeftColor={'#B39DDB'}
                    borderRadius={'100%'}
                    fontSize={'28px'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    px={'30px'}
                    py={'40px'}
                  >
                    <Text width={'60px'}>{user.level}</Text>
                  </Box>
                </VStack>
              </Container>
            </CardBody>
          </Card>
        </SimpleGrid>
        <ProfileFooter />
      </Box>
    </>
  );
};

export default Profile;

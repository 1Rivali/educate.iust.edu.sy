import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import ProfileAppBar from '../components/ProfileAppBar';
import ProfileNavigator from '../components/ProfileNavigator';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from '../../@/components/ui/select';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
export interface User {
  id: number;
  name: string;
  username: string;
  gpa: string;
  faculty: string;
  specialization: string;
  status: string;
  supervisor: any;
  planProgress: number;
  level: number;
  balance: number;
  semesters: Semester[];
}
export interface Subject {
  id: number;
  name: string;
  code: string;
  credits: number;
  mark: string;
  digit_mark: string;
  is_passed: boolean;
  status: string;
  is_repeated: boolean;
  prohibition: boolean;
  activity: string;
  withdrawal: boolean;
  failure: boolean;
  room: string;
  time: string;
}

export interface Semester {
  id: number;
  name: string;
  subjects?: Subject[];
}

const Marks = () => {
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
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: null,
      name: null,
      code: null,
      credits: null,
      mark: null,
      digit_mark: null,
      is_passed: null,
      status: null,
      is_repeated: null,
      prohibition: null,
      activity: null,
      withdrawal: null,
      failure: null,
      room: null,
      time: null,
    },
  ]);

  const handleSemesterChange = (value: string) => {
    apiClient
      .get<Semester>(`/subjects/semester/${value}`)
      .then((res) => {
        setSubjects(res.data.subjects);
        console.log('type', subjects);
      })
      .catch((e) => {
        return;
      });
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <Box sx={{ direction: 'rtl' }} color={'white'}>
      <ProfileAppBar />
      <ProfileNavigator
        page={<Link to={'/profile/marks'}>نتائج المواد</Link>}
      />
      <Card
        p={3}
        m={3}
        boxShadow={
          '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
        }
      >
        <CardHeader fontSize={'18px'} fontWeight={'bold'}>
          نتائج المواد
        </CardHeader>
        <CardBody>
          <Text mb={'25px'}>الفصل الدراسي</Text>
          <Select onValueChange={handleSemesterChange}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="يرجى الاختيار ..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="w-[220px] bg-white border-gray-700">
                {user.semesters.map((semester) => (
                  <SelectItem key={semester.id} value={semester.id.toString()}>
                    {semester.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Box
            height={'40px'}
            bgColor={'#2f4050'}
            mt={'50px'}
            color={'white'}
            textAlign={'center'}
            fontWeight={'bold'}
            fontSize={'18px'}
          >
            <Center height={'100%'}>المواد</Center>
          </Box>
          {(subjects.length == 1 && subjects[0].id == null) ||
          subjects.length == 0 ? (
            <Center mt={'20px'} key={1}>
              <Text>لا يوجد بيانات</Text>
            </Center>
          ) : (
            <SimpleGrid>
              {subjects.map((subject) => (
                <Card
                  key={subject.id}
                  bgColor={subject.id % 2 != 0 ? 'blackAlpha.200' : 'white'}
                  borderRadius={0}
                >
                  <CardBody>
                    <HStack justifyContent={'space-between'} mb={'20px'}>
                      <Text>رمز المقرر</Text>
                      <Text
                        fontSize={'14px'}
                        textAlign={'center'}
                        width={'50%'}
                      >
                        {subject.code}
                      </Text>
                    </HStack>
                    <HStack justifyContent={'space-between'} mb={'20px'}>
                      <Text>اسم المقرر</Text>
                      <Text
                        fontSize={'14px'}
                        textAlign={'center'}
                        width={'50%'}
                      >
                        {subject.name}
                      </Text>
                    </HStack>
                    <HStack justifyContent={'space-between'} mb={'20px'}>
                      <Text>النشاط</Text>
                      <Text
                        fontSize={'14px'}
                        textAlign={'center'}
                        width={'50%'}
                      >
                        {subject.activity}
                      </Text>
                    </HStack>
                    <HStack justifyContent={'space-between'} mb={'20px'}>
                      <Text>الحالة</Text>
                      <Text
                        fontSize={'14px'}
                        textAlign={'center'}
                        width={'50%'}
                      >
                        {subject.status}
                      </Text>
                    </HStack>
                    <HStack justifyContent={'space-between'} mb={'20px'}>
                      <Text>العلامة</Text>
                      <Text
                        fontSize={'14px'}
                        textAlign={'center'}
                        width={'50%'}
                        fontWeight={'bold'}
                        color={subject.digit_mark != '0' ? 'green' : 'red'}
                      >
                        {subject.digit_mark}
                      </Text>
                    </HStack>
                    <HStack justifyContent={'space-between'} mb={'20px'}>
                      <Text>العلامة بالاحرف</Text>
                      <Text
                        fontSize={'14px'}
                        textAlign={'center'}
                        width={'50%'}
                        fontWeight={'bold'}
                      >
                        {subject.mark}
                      </Text>
                    </HStack>
                    <HStack justifyContent={'space-between'} mb={'20px'}>
                      <Text>ناجح؟</Text>
                      <Text
                        textAlign={'center'}
                        width={'50%'}
                        fontSize={'14px'}
                        color={subject.is_passed == true ? 'green' : 'red'}
                        fontWeight={'bold'}
                      >
                        {subject.is_passed == true ? 'ناجح' : 'لا'}
                      </Text>
                    </HStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          )}
        </CardBody>
      </Card>
    </Box>
  );
};

export default Marks;

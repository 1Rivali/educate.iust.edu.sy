import { Card, CardBody, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { Subject } from '../pages/Marks';
interface Props {
  subjects: Subject[];
}
const MarksMobileGrid = ({ subjects }: Props) => {
  return (
    <SimpleGrid
      display={{ base: 'grid', sm: 'grid', md: 'none', lg: 'none', xl: 'none' }}
    >
      {subjects.map((subject) => (
        <Card
          key={subject.id}
          bgColor={subject.id % 2 != 0 ? 'blackAlpha.200' : 'white'}
          borderRadius={0}
        >
          <CardBody>
            <HStack justifyContent={'space-between'} mb={'20px'}>
              <Text>رمز المقرر</Text>
              <Text fontSize={'14px'} textAlign={'center'} width={'50%'}>
                {subject.code}
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'} mb={'20px'}>
              <Text>اسم المقرر</Text>
              <Text fontSize={'14px'} textAlign={'center'} width={'50%'}>
                {subject.name}
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'} mb={'20px'}>
              <Text>النشاط</Text>
              <Text fontSize={'14px'} textAlign={'center'} width={'50%'}>
                {subject.activity}
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'} mb={'20px'}>
              <Text>الحالة</Text>
              <Text fontSize={'14px'} textAlign={'center'} width={'50%'}>
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
                color={subject.digit_mark != '0.00' ? 'green' : 'red'}
              >
                {subject.digit_mark == '0.00' ? '0' : subject.digit_mark}
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
                {subject.is_passed == true ? 'ناجح' : 'راسب'}
              </Text>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default MarksMobileGrid;

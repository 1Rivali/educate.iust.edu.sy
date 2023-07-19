import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { Subject } from '../pages/Marks';

interface Props {
  subjects: Subject[];
}
const MarksDesktopGrid = ({ subjects }: Props) => {
  return (
    <TableContainer
      borderRadius={0}
      display={{ base: 'none', sm: 'none', md: 'grid', lg: 'grid', xl: 'grid' }}
    >
      <Table variant={'simple'}>
        <Thead>
          <Tr border={'1px solid #d8d8d8'}>
            <Th
              border={'1px solid #d8d8d8'}
              fontWeight={'bold'}
              fontSize={'14px'}
              textAlign={'center'}
              width={'10%'}
            >
              رمز المقرر
            </Th>
            <Th
              border={'1px solid #d8d8d8'}
              fontWeight={'bold'}
              fontSize={'14px'}
              textAlign={'center'}
              width={'10%'}
            >
              اسم المقرر
            </Th>
            <Th
              border={'1px solid #d8d8d8'}
              fontWeight={'bold'}
              fontSize={'14px'}
              textAlign={'center'}
              width={'10%'}
            >
              النشاط
            </Th>
            <Th
              border={'1px solid #d8d8d8'}
              fontWeight={'bold'}
              fontSize={'14px'}
              textAlign={'center'}
              width={'10%'}
            >
              الحالة
            </Th>
            <Th
              border={'1px solid #d8d8d8'}
              fontWeight={'bold'}
              fontSize={'14px'}
              textAlign={'center'}
              width={'10%'}
            >
              العلامة
            </Th>
            <Th
              border={'1px solid #d8d8d8'}
              fontWeight={'bold'}
              fontSize={'14px'}
              textAlign={'center'}
              width={'10%'}
            >
              العلامة بالاحرف
            </Th>
            <Th
              border={'1px solid #d8d8d8'}
              fontWeight={'bold'}
              fontSize={'14px'}
              textAlign={'center'}
              width={'10%'}
            >
              ناجح؟
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {subjects.map((subject) => (
            <Tr
              key={subject.id}
              border={'1px solid #d8d8d8'}
              bgColor={subject.id % 2 != 0 ? 'blackAlpha.200' : 'white'}
            >
              <Td
                border={'1px solid #d8d8d8'}
                fontWeight={'bold'}
                fontSize={'14px'}
                textAlign={'center'}
                width={'10%'}
              >
                {subject.code}
              </Td>
              <Td
                border={'1px solid #d8d8d8'}
                fontWeight={'bold'}
                fontSize={'14px'}
                textAlign={'center'}
                width={'10%'}
              >
                {subject.name}
              </Td>
              <Td
                border={'1px solid #d8d8d8'}
                fontWeight={'bold'}
                fontSize={'14px'}
                textAlign={'center'}
                width={'10%'}
              >
                {subject.activity}
              </Td>
              <Td
                border={'1px solid #d8d8d8'}
                fontWeight={'bold'}
                fontSize={'14px'}
                textAlign={'center'}
                width={'10%'}
              >
                {subject.status}
              </Td>
              <Td
                border={'1px solid #d8d8d8'}
                fontWeight={'bold'}
                fontSize={'14px'}
                textAlign={'center'}
                width={'10%'}
                color={subject.digit_mark != '0.00' ? 'green' : 'red'}
              >
                {subject.digit_mark == '0.00' ? '0' : subject.digit_mark}
              </Td>
              <Td
                border={'1px solid #d8d8d8'}
                fontWeight={'bold'}
                fontSize={'14px'}
                textAlign={'center'}
                width={'10%'}
              >
                {subject.mark}
              </Td>
              <Td
                border={'1px solid #d8d8d8'}
                fontWeight={'bold'}
                fontSize={'14px'}
                textAlign={'center'}
                width={'10%'}
                color={subject.is_passed == true ? 'green' : 'red'}
              >
                {subject.is_passed == true ? 'ناجح' : 'راسب'}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MarksDesktopGrid;

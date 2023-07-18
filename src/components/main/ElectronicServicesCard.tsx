import { Card, CardBody, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
  text: string;
  to: string;
  icon: React.ReactNode;
}

const ElectronicServicesCard = ({ text, to, icon }: Props) => {
  return (
    <>
      <VStack>
        <Card
          border={'1px solid #e5e7e9'}
          paddingX={'100px'}
          paddingY={'50px'}
          marginTop={10}
          textAlign={'center'}
        >
          <Link href={to}>
            <CardBody paddingRight={'15px'} paddingLeft={'15px'}>
              <VStack
                color={'#005072'}
                justifyContent={'space-between'}
                height={'inherit'}
              >
                {icon}
                <Text>{text}</Text>
              </VStack>
            </CardBody>
          </Link>
        </Card>
      </VStack>
    </>
  );
};

export default ElectronicServicesCard;

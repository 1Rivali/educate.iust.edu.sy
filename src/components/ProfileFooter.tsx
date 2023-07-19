import { Card, CardBody, CardHeader, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfileFooter = () => {
  return (
    <Card
      paddingX={2}
      mx={4}
      my={5}
      boxShadow={
        '0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26)'
      }
    >
      <CardHeader>
        <HStack
          justifyContent={'space-between'}
          width={{ base: '45%', sm: '45%', md: '10%', lg: '10%', xl: '10%' }}
          fontSize={'24px'}
        >
          <Link
            to={'https://www.facebook.com/IUST-Official-1672812356291463/'}
            target="_blank"
          >
            <FaFacebook color="#3b5998" />
          </Link>
          <Link
            to={'https://twitter.com/IUST5?ref_src=twsrc^tfw'}
            target="_blank"
          >
            <FaTwitter color="#00acee" />
          </Link>
          <Link
            to={'https://www.youtube.com/channel/UCNX0fbbJW0W-bcOTUu-6Fhw'}
            target="_blank"
          >
            <FaYoutube color="#ff0000" />
          </Link>
        </HStack>
      </CardHeader>
      <CardBody
        backgroundColor={'#2f4050'}
        color={'white'}
        mx={4}
        mb={4}
        borderRadius={4}
      >
        الجامعة الدولية الخاصة للعلوم والتكنولوجيا 2022
      </CardBody>
    </Card>
  );
};

export default ProfileFooter;

import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <Box backgroundColor={'#005072'} color={'white'} padding={'3em 0'}>
        <VStack paddingX={'15px'} sx={{ direction: 'ltr' }}>
          <Container position={'relative'} paddingX={'15px'}>
            <Heading
              variant={'h3'}
              position={'relative'}
              marginBottom={'1.5em'}
            >
              About Us
            </Heading>
            <Text lineHeight={'1.8em'} marginBottom={'2em'} fontSize={'15px'}>
              The vision of IUST is to become a worldwide center dedicated for
              excellence and creativity through its quality-oriented programs
              and scientific researches, through the quality initiative
              character, integrity, and commitment of its graduates, and by the
              active contribution to the human development on both local and
              regional levels.
            </Text>
          </Container>
          <Container>
            <Heading
              variant={'h3'}
              position={'relative'}
              marginBottom={'1.5em'}
            >
              Contact Us
            </Heading>
            <HStack marginBottom={'1.8em'}>
              <FaMapMarkerAlt />
              <Text>Ghabagheb - Daraa Highway,</Text>
            </HStack>
            <HStack marginBottom={'1.8em'}>
              <FaPhoneAlt />
              <Text> (+963) 15 68691974</Text>
            </HStack>
          </Container>

          <Container position={'relative'} paddingX={'15px'}>
            <Heading
              variant={'h3'}
              position={'relative'}
              marginBottom={'1.5em'}
            >
              Subscribe
            </Heading>
            <Text lineHeight={'1.8em'} marginBottom={'2em'} fontSize={'15px'}>
              By subscribing to our mailing list you will always get latest news
              from us.
            </Text>
          </Container>
        </VStack>
      </Box>
      <Text
        color={'white'}
        backgroundColor={'#002c3f'}
        width={'100%'}
        textAlign={'center'}
        lineHeight={'1.8em'}
        letterSpacing={'1px'}
        padding={'10px 0'}
      >
        الجامعة الدولية الخاصة للعلوم والتكنولوجيا 2022
      </Text>
    </>
  );
};

export default Footer;

import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
const About = () => {
  return (
    <Box
      backgroundImage="url('/bann3.jpg')"
      backgroundAttachment={'fixed'}
      backgroundSize={'cover'}
      marginTop={20}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      padding={'5em 0'}
      color={'white'}
    >
      <Center>
        <Box
          width={{ sm: '70%', md: '50%', lg: '50%', xl: '50%', base: '70%' }}
          padding={'2em'}
          backgroundColor={'#005072'}
          sx={{
            direction: 'rtl',
          }}
        >
          <VStack sx={{ direction: 'rtl' }}>
            <Heading
              variant="h3"
              fontSize={'23px'}
              lineHeight={'30px'}
              textAlign={'right'}
            >
              نبذة عن الجامعة
            </Heading>
            <Text fontSize={'14px'}>
              IUST تقدم كليات أعلى جودة ممكنة من البرامج والدورات والتخصصات التي
              تتحدى الطلاب بفرص التعلم التفاعلية على جميع المستويات. يتم دمج
              أحدث التقنيات وتقنيات ووحدات التعلم الإلكتروني والمكتبة
              الإلكترونية / المكتبة الافتراضية وقواعد البيانات على الإنترنت ،
              فضلاً عن تقنيات المعلومات والاتصالات (ICT) في المناهج الدراسية
              اليومية.
            </Text>
            <br />
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default About;

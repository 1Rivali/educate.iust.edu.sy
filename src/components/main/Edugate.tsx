import { VStack, Image, Text } from '@chakra-ui/react';
const Edugate = () => {
  return (
    <VStack
      sx={{ direction: 'rtl' }}
      marginTop={10}
      paddingX={'15px'}
      position={'relative'}
      padding={'40px'}
    >
      <Image
        src={'/edugate.svg'}
        width={{ base: '50%', sm: '50%', md: '20%', lg: '20%', xl: '20%' }}
        verticalAlign={'middle'}
      />
      <Text
        fontSize={{ base: 'lg', sm: 'lg', md: 'xl', lg: 'xl', xl: 'xl' }}
        marginTop={'30px'}
        letterSpacing={'1px'}
      >
        البوابة الالكترونية (Edugate) هي منظومة تتكون من عدة خدمات لزوار البوابة
        والطلاب والمدرسين. هدفها تسهيل التعامل مع النظام الأكاديمي للجامعة
        وتوفير أكبر قدر من المعلومات لمستخدميها، مع ضمان صحة المعلومات ودقتها
        وتحديثها مباشرة. تعمل البوابة باللغتين العربية والانجليزية، تمتاز
        بسلاستها وإمكانية استخدامها من قبل الجميع، مما يخفف العبء عن دوائر
        الجامعة ويوفر الوقت والجهد.
      </Text>
    </VStack>
  );
};

export default Edugate;

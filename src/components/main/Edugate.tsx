import { VStack, Image, Text } from '@chakra-ui/react';
import edugate from '../../assets/edugate.svg';
const Edugate = () => {
  return (
    <VStack
      sx={{ direction: 'rtl' }}
      marginTop={10}
      paddingX={'15px'}
      position={'relative'}
    >
      <Image src={edugate} width={'50%'} verticalAlign={'middle'} />
      <Text fontSize={'lg'} marginTop={'30px'}>
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

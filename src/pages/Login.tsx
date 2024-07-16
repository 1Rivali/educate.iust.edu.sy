import {
  Box,
  Card,
  CardHeader,
  HStack,
  Text,
  Image,
  VStack,
  Center,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  CardFooter,
  Button,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import axios from 'axios';
import { FormEvent, useRef, useState } from 'react';

import { FaUser } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (usernameRef.current && passwordRef.current) {
      setLoading(true);
      axios
        .post('https://iust-edu-sy.vercel.app/students/login', {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('user', JSON.stringify(response.data));
          setLoading(false);
          navigate('/profile', { replace: true });
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }
  };

  return (
    <Box
      backgroundImage={'url(/login-image.jpg)'}
      backgroundAttachment={'fixed'}
      backgroundSize={'cover'}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      pt={'200px'}
      minHeight={'100vh'}
    >
      {isError ? (
        <Center
          bottom={'auto'}
          top={'0'}
          left={'auto'}
          right={'0'}
          position={'absolute'}
          mt={'20px'}
        >
          <Alert borderRadius={'10px'} status="error" width={'100%'}>
            <AlertIcon />
            اسم المستخدم او كلمة المرور غير صحيحة
          </Alert>
        </Center>
      ) : (
        ''
      )}
      <Center>
        <Card
          mt={0}
          width={{ base: '70%', sm: '70%', md: '40%', lg: '40%', xl: '40%' }}
        >
          <CardHeader backgroundColor={'#607D8B'} color={'white'}>
            <HStack justifyContent={'space-between'} paddingX={'20px'}>
              <VStack>
                <Text>الدخول</Text>
                <Text>أهلا وسهلا</Text>
              </VStack>
              <Image
                src={'/edugate.svg'}
                width={{
                  base: '60%',
                  sm: '60%',
                  md: '40%',
                  lg: '40%',
                  xl: '40%',
                }}
              />
            </HStack>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardBody sx={{ direction: 'rtl' }} p={10}>
              <FormControl>
                <FormLabel mb={0} fontSize={'14px'}>
                  اسم المستخدم
                </FormLabel>
                <Input ref={usernameRef} variant={'flushed'} mt={0} />
                <FormLabel mb={0} fontSize={'14px'}>
                  كلمة المرور
                </FormLabel>
                <Input
                  ref={passwordRef}
                  variant={'flushed'}
                  mt={0}
                  type="password"
                />
              </FormControl>
            </CardBody>
            <CardFooter padding={'20px 35px'}>
              <Button
                leftIcon={<FaUser />}
                textAlign={'center'}
                justifyContent={'space-between'}
                backgroundColor={'#607D8B'}
                color="white"
                width={'100%'}
                borderRadius={'5px'}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : 'دخول'}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Center>
    </Box>
  );
};

export default Login;

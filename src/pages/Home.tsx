import AppBar from '../components/header/AppBar';
import NavBar from '../components/header/NavBar';
import About from '../components/main/About';
import ElectronicServicesCard from '../components/main/ElectronicServicesCard';
import { Text } from '@chakra-ui/react';
import { FaBook, FaPaperPlane, FaUserMd } from 'react-icons/fa';
import Edugate from '../components/main/Edugate';
import Footer from '../components/main/Footer';
const Home = () => {
  return (
    <>
      <AppBar />
      <NavBar />
      <Text fontSize={'2xl'} textAlign={'center'} marginTop={5}>
        الخدمات الالكترونية
      </Text>
      <ElectronicServicesCard
        to="http://educate.iust.edu.sy/faces/ui/pages/guest/scheduleCourses/index.xhtml"
        text="الجدول الدراسي"
        icon={<FaBook fontSize="3em" />}
      />
      <ElectronicServicesCard
        to="http://educate.iust.edu.sy/faces/ui/pages/guest/plan/index.xhtml"
        text="الخطط الدراسية"
        icon={<FaPaperPlane fontSize="3em" />}
      />
      <ElectronicServicesCard
        to="http://educate.iust.edu.sy/faces/ui/pages/guest/facultyStaff/index.xhtml"
        text="الهيئة التدريسية"
        icon={<FaUserMd fontSize="3em" />}
      />
      <About />
      <Edugate />
      <Footer />
    </>
  );
};

export default Home;

import { useSelector } from 'react-redux';
import DesignOne from '../Templates/DesignOne';
import Container from '../utils/Container';

const Ninth = () => {
  const userData = useSelector((state) => state.user);
  console.log(userData);
  return (
    <Container>
      <DesignOne />
    </Container>
  );
};

export default Ninth;

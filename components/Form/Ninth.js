import { useSelector } from 'react-redux';
import DesignOne from '../Templates/DesignOne';
import Container from '../utils/Container';
import StepCount from '../utils/StepCount';
import BtnGroup from '../utils/BtnGroup';

const Ninth = () => {
  const userData = useSelector((state) => state.user);
  console.log(userData);
  return (
    <Container>
      <StepCount count={8} />
      <div style={{ marginTop: '2rem' }}>
        <DesignOne />
      </div>
      <BtnGroup prev={'/form/eighth'} />
    </Container>
  );
};

export default Ninth;

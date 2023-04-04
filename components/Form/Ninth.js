import { useSelector } from 'react-redux';
import DesignOne from '../Templates/DesignOne';

const Ninth = () => {
  const userData = useSelector((state) => state.user);
  console.log(userData);
  return (
    <div>
      <DesignOne />
    </div>
  );
};

export default Ninth;

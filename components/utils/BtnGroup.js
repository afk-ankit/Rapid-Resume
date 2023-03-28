import { Button, ButtonGroup } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from 'next/router';
const btnStyle = {
  background: '#FF9300',
  color: 'white',
};

const BtnGroup = ({ prev, next }) => {
  const router = useRouter();
  const prevHandler = () => {
    router.push(prev);
  };

  const nextHandler = () => {
    router.push(next);
  };
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        width: '200px',
        margin: 'auto',
      }}
    >
      <Button
        startIcon={<KeyboardArrowLeftIcon />}
        style={btnStyle}
        onClick={prevHandler}
      >
        Tilbage
      </Button>
      <Button
        endIcon={<KeyboardArrowRightIcon />}
        style={btnStyle}
        onClick={nextHandler}
      >
        Næste
      </Button>
    </div>
  );
};

export default BtnGroup;

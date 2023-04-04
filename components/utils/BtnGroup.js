import { Button, ButtonGroup } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from 'next/router';

const BtnGroup = ({ prev, next, isValid, onSubmit }) => {
  const router = useRouter();
  const prevHandler = () => {
    router.push(prev);
  };

  const btnStyle = (isValid) => {
    if (!isValid) {
      return {
        background: '#808080',
        color: 'white',
      };
    } else {
      return {
        background: '#FF9300',
        color: 'white',
      };
    }
  };

  const nextHandler = () => {
    router.push(next);
    onSubmit();
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
        style={btnStyle(true)}
        onClick={prevHandler}
      >
        Tilbage
      </Button>
      <Button
        endIcon={<KeyboardArrowRightIcon />}
        style={btnStyle(isValid)}
        onClick={nextHandler}
        disabled={!isValid}
      >
        Næste
      </Button>
    </div>
  );
};

export default BtnGroup;

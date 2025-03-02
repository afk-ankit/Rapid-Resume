import { Button, ButtonGroup } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useRouter } from "next/router";

const BtnGroup = ({ prev, next, isValid, onSubmit, single }) => {
  const router = useRouter();
  const prevHandler = () => {
    router.push(prev);
  };

  const btnStyle = (isValid) => {
    if (!isValid) {
      return {
        background: "#808080",
        color: "white",
      };
    } else {
      return {
        background: "#FF9300",
        color: "white",
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
        display: "flex",
        gap: "1rem",
        width: "fit-content",
        margin: "auto",
      }}
    >
      {!single ? (
        <>
          {" "}
          <Button
            startIcon={<KeyboardArrowLeftIcon />}
            style={btnStyle(false)}
            onClick={prevHandler}
          >
            Previous
          </Button>
          <Button
            endIcon={<KeyboardArrowRightIcon />}
            style={btnStyle(isValid)}
            onClick={nextHandler}
            disabled={!isValid}
          >
            Next
          </Button>
        </>
      ) : (
        <Button
          endIcon={<KeyboardArrowRightIcon />}
          style={btnStyle(isValid)}
          onClick={nextHandler}
          disabled={!isValid}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default BtnGroup;

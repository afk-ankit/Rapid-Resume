import { Button, InputLabel, Slider, Stepper } from '@mui/material';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import StepCount from '../utils/StepCount';
import AvatarEditor from 'react-avatar-editor';
import { Label } from '@mui/icons-material';
import styles from '@/styles/Third.module.scss';

const Third = () => {
  const { url } = useSelector((state) => state);
  const [selectedFile, setSelectedFile] = useState(null);
  const [scale, setScale] = useState(1);
  const [edit, setEdit] = useState(false);

  const handleScaleChange = (newScale) => {
    setScale(newScale.target.value);
  };
  const editorRef = useRef();
  const [croppedImage, setCroppedImage] = useState(url);
  const dispatch = useDispatch();
  useEffect(() => {
    croppedImage
      ? dispatch(populate({ url: croppedImage }))
      : dispatch(populate({ url: null }));
  }, [croppedImage]);

  return (
    <Container>
      <StepCount count={2} />
      <Page>
        <div className="">
          <InputLabel id="ankit">
            We recommend adding a picture of you for a professional looking CV
          </InputLabel>
          <div>
            <input
              type="file"
              id="ankit"
              style={{ marginTop: '1rem' }}
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
                setEdit(true);
              }}
              accept="image/*"
            />
          </div>

          {edit && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AvatarEditor
                ref={editorRef}
                image={selectedFile ? URL.createObjectURL(selectedFile) : null}
                width={200}
                height={200}
                border={50}
                color={[255, 255, 255, 0.6]}
                scale={scale}
                rotate={0}
                borderRadius={125}
                crossOrigin="anonymous"
                style={{ marginTop: '1rem' }}
              />
              <InputLabel>Adjust the slider to zoom</InputLabel>
              <Slider
                value={scale}
                min={1}
                max={5}
                step={0.1}
                style={{ width: '300px' }}
                onChange={handleScaleChange}
                aria-label="Zoom"
              />
              <div>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (editorRef.current) {
                      const canvas = editorRef.current.getImageScaledToCanvas();
                      const croppedImage = canvas.toDataURL();
                      setCroppedImage(croppedImage);
                      setEdit(false);
                    }
                  }}
                >
                  Crop Image
                </Button>
              </div>
            </div>
          )}
          {croppedImage && (
            <>
              <div style={{ width: 'fit-content', margin: 'auto' }}>
                <img
                  src={croppedImage}
                  alt="Cropped Image"
                  style={{ width: '200px', marginTop: '1rem' }}
                />
              </div>
              <div
                style={{ width: 'fit-content', margin: ' 1rem auto 0 auto' }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit Image
                </Button>
              </div>
            </>
          )}
        </div>
      </Page>
      <BtnGroup
        prev={'/form/second'}
        next={'/form/fourth'}
        isValid={true}
        onSubmit={() => {}}
      />
    </Container>
  );
};

export default Third;

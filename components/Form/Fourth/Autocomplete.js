import technicalSkill from "@/public/technicalSkill.json";
import softSkill from "@/public/softSkill.json";

import {
  Autocomplete,
  Button,
  FormGroup,
  IconButton,
  InputLabel,
  Rating,
  TextField,
} from "@mui/material";
import { Field } from "formik";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "@/styles/Autocomplete.module.scss";
import useWindowWidth from "@/components/utils/useWindow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { populate } from "@/store/slice/userSlice";
import { ar } from "date-fns/locale";

const Autocomplete1 = ({ form, push, remove, label1, label2 }) => {
  const { selectedSoftSkill, selectedTechnicalSkill } = useSelector(
    (state) => state
  );
  const { values } = form;
  const isMobile = useWindowWidth() < 850;
  const [skillArr, setSkillArr] = useState(
    label2 == "softSkill" ? softSkill : technicalSkill
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (label2 == "softSkill" && selectedSoftSkill) {
      let arr = [...skillArr];
      const AminusB = arr.filter(
        (element) => !selectedSoftSkill.includes(element)
      );
      console.log(AminusB);
      setSkillArr(AminusB);
    }
    if (label2 == "technicalSkill" && selectedTechnicalSkill) {
      let arr = [...skillArr];
      const AminusB = arr.filter(
        (element) => !selectedTechnicalSkill.includes(element)
      );
      setSkillArr(AminusB);
    }
  }, [selectedSoftSkill, selectedTechnicalSkill]);

  let arr;
  if (label2 == "softSkill") {
    arr = values.softSkill;
  }
  if (label2 == "technicalSkill") {
    arr = values.technicalSkill;
  }
  return (
    <>
      <div className={styles.main}>
        {arr.map((item, index) => {
          return (
            <div className={styles.container}>
              <Field name={`${label2}[${index}].name`}>
                {({ field, meta, form }) => {
                  const { setFieldValue, setFieldTouched } = form;

                  return (
                    <Autocomplete
                      fullWidth
                      {...field}
                      onBlur={() =>
                        setFieldTouched(`${label2}[${index}].name`, true)
                      }
                      value={meta.value}
                      onChange={(e, value) => {
                        if (value) {
                          setFieldValue(`${label2}[${index}].name`, value);

                          if (label2 == "softSkill") {
                            dispatch(
                              populate({
                                selectedSoftSkill: [
                                  ...selectedSoftSkill,
                                  value,
                                ],
                              })
                            );
                          } else {
                            dispatch(
                              populate({
                                selectedTechnicalSkill: [
                                  ...selectedTechnicalSkill,
                                  value,
                                ],
                              })
                            );
                          }
                        }
                      }}
                      inputValue={meta.value}
                      onInputChange={(e, value) => {
                        setFieldValue(`${label2}[${index}].name`, value);
                      }}
                      options={skillArr}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={meta.touched && Boolean(meta.error)}
                          helperText={meta.touched && meta.error}
                          label={`Type or select a ${label1}`}
                        />
                      )}
                    />
                  );
                }}
              </Field>
              <Field name={`${label2}[${index}].rating`}>
                {({ field, form, meta }) => {
                  return (
                    <>
                      <div>
                        <FormGroup error={meta.error && meta.touched}>
                          <InputLabel
                            id="rating-select"
                            error={meta.error && meta.touched}
                          >
                            Rating
                          </InputLabel>
                          <Rating
                            name="simple-controlled"
                            size="large"
                            labelId="rating-select"
                            {...field}
                          />
                          {meta.error && meta.touched && (
                            <FormHelperText>{meta.error}</FormHelperText>
                          )}
                        </FormGroup>
                      </div>

                      {arr.length > 1 && !isMobile && (
                        <IconButton
                          size="large"
                          color="primary"
                          onClick={() => {
                            if (label2 == "softSkill") {
                              const demo1 = [...selectedSoftSkill];
                              const skill = [...skillArr, arr[index].name];
                              setSkillArr(skill);
                              dispatch(
                                populate({
                                  selectedSoftSkill: demo1.filter(
                                    (item) => item != arr[index].name
                                  ),
                                })
                              );
                            } else {
                              const demo1 = [...selectedTechnicalSkill];
                              const skill = [...skillArr, arr[index].name];
                              setSkillArr(skill);
                              dispatch(
                                populate({
                                  selectedTechnicalSkill: demo1.filter(
                                    (item) => item != arr[index].name
                                  ),
                                })
                              );
                            }
                            remove(index);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                      {arr.length > 1 && isMobile && (
                        <Button
                          variant="contained"
                          style={{ background: "red", alignSelf: "center" }}
                          onClick={() => {
                            if (label2 == "softSkill") {
                              const demo1 = [...selectedSoftSkill];
                              const skill = [...skillArr, arr[index].name];
                              setSkillArr(skill);
                              dispatch(
                                populate({
                                  selectedSoftSkill: demo1.filter(
                                    (item) => item != arr[index].name
                                  ),
                                })
                              );
                            } else {
                              const demo1 = [...selectedTechnicalSkill];
                              const skill = [...skillArr, arr[index].name];
                              setSkillArr(skill);
                              dispatch(
                                populate({
                                  selectedTechnicalSkill: demo1.filter(
                                    (item) => item != arr[index].name
                                  ),
                                })
                              );
                            }
                            remove(index);
                          }}
                        >
                          Delete
                        </Button>
                      )}
                    </>
                  );
                }}
              </Field>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={() => {
            push({ name: "", rating: 0 });
          }}
          endIcon={<AddIcon />}
        >
          Add another {label1}
        </Button>
      </div>
    </>
  );
};

export default Autocomplete1;

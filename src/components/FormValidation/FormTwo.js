import React from "react";

import { FORM_ACTIONS } from "../../util/rawData";
import Input from "./Input";
import { useForm } from "./FormProvider";
import classes from "./Form.module.css";

const FormTwo = ({ fields }) => {
  const {
    state: {
      activeIndex,
      currentForm: {
        formOne: { isValid },
      },
    },
    dispatch,
  } = useForm();
  return (
    <>
      {fields.map((element) => (
        <Input key={element.id} {...element} changed={(val, id) => dispatch({ type: FORM_ACTIONS.UPDATE_FIELDS, payload: { val, id, formType: "formTwo" } })} />
      ))}
      <button className={`${classes.btn} ${!isValid ? classes.disabledbtn : classes.validbtn}`} onClick={() => dispatch({ type: FORM_ACTIONS.PREV_FORM, payload: activeIndex })} disabled={!isValid}>
        Prev
      </button>
      {/* <button></button> */}
    </>
  );
};

export default FormTwo;

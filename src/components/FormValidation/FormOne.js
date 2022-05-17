import React from "react";
import Input from "./Input";

import { useForm } from "./FormProvider";

import { FORM_ACTIONS } from "../../util/rawData";
import classes from "./Form.module.css";

const FormOne = ({ fields }) => {
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
      {fields.map((element) => {
        return <Input key={element.id} {...element} changed={(val, id) => dispatch({ type: FORM_ACTIONS.UPDATE_FIELDS, payload: { val, id, formType: "formOne" } })} />;
      })}
      <button
        className={`${classes.btn} ${!isValid ? classes.disabledbtn : classes.validbtn}`}
        onClick={() => dispatch({ type: FORM_ACTIONS.NEXT_FORM, payload: activeIndex })}
        disabled={!isValid}
      >
        Next
      </button>
      {/* <button></button> */}
    </>
  );
};

export default FormOne;

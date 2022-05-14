import React from "react";
import { FORM_ACTIONS } from "../../util/rawData";
import Input from "./Input";
import { useForm } from "./FormProvider";

const FormTwo = ({ fields }) => {
  const {
    state: { activeIndex },
    dispatch,
  } = useForm();
  return (
    <>
      {fields.map((element) => (
        <Input key={element.id} {...element} changed={(val, id) => dispatch({ type: FORM_ACTIONS.UPDATE_FIELDS, payload: { val, id } })} />
      ))}
      <button onClick={() => dispatch({ type: FORM_ACTIONS.PREV_FORM, payload: activeIndex })}>Prev</button>
      {/* <button></button> */}
    </>
  );
};

export default FormTwo;

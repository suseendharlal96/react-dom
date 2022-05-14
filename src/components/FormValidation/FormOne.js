import React from "react";
import Input from "./Input";

import { useForm } from "./FormProvider";

import { FORM_ACTIONS } from "../../util/rawData";

const FormOne = ({ fields }) => {
  const {
    state: { activeIndex },
    dispatch,
  } = useForm();
  return (
    <>
      {fields.map((element) => {
       return <Input key={element.id} {...element} changed={(val, id) => dispatch({ type: FORM_ACTIONS.UPDATE_FIELDS, payload: { val, id } })} />;
      })}
      <button onClick={() => dispatch({ type: FORM_ACTIONS.NEXT_FORM, payload: activeIndex })}>Next</button>
      {/* <button></button> */}
    </>
  );
};

export default FormOne;

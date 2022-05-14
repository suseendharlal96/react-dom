import React from "react";

import { FormProvider } from "./FormProvider";
import FormValidation from "./FormValidation";

const MultistepForm = () => {
  return (
    <FormProvider>
      <FormValidation />
    </FormProvider>
  );
};

export default MultistepForm;

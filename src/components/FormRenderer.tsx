import React from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";

const FormRenderer: React.FC<{ schema: any; uischema: any }> = ({
  schema,
  uischema,
}) => {
  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={{}}
      renderers={materialRenderers}
    />
  );
};

export default FormRenderer;

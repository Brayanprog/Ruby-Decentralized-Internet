import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const IntegrationTestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="component" source="component" />
        <SelectInput
          source="result"
          label="result"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="testedAt" source="testedAt" />
      </SimpleForm>
    </Edit>
  );
};

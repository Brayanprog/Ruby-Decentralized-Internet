import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlockchainEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="hash" source="hash" />
        <TextInput label="previousHash" source="previousHash" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { EmailTitle } from "../email/EmailTitle";

export const AttachmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="email.id" reference="Email" label="email">
          <SelectInput optionText={EmailTitle} />
        </ReferenceInput>
        <div />
        <NumberInput step={1} label="fileSize" source="fileSize" />
        <TextInput label="fileType" source="fileType" />
        <TextInput label="filename" source="filename" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { EmailTitle } from "../email/EmailTitle";

export const AttachmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="email.id" reference="Email" label="email">
          <SelectInput optionText={EmailTitle} />
        </ReferenceInput>
        <div />
        <NumberInput step={1} label="fileSize" source="fileSize" />
        <TextInput label="fileType" source="fileType" />
        <TextInput label="filename" source="filename" />
      </SimpleForm>
    </Create>
  );
};

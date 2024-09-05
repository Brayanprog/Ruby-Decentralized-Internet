import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AttachmentTitle } from "../attachment/AttachmentTitle";

export const EmailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attachments"
          reference="Attachment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttachmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="body" multiline source="body" />
        <DateTimeInput label="receivedAt" source="receivedAt" />
        <TextInput label="recipient" source="recipient" />
        <TextInput label="sender" source="sender" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AttachmentTitle } from "../attachment/AttachmentTitle";

export const EmailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PeerCommunicationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="receiverId" source="receiverId" />
        <TextInput label="senderId" source="senderId" />
        <DateTimeInput label="sentAt" source="sentAt" />
      </SimpleForm>
    </Create>
  );
};

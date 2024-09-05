import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PeerCommunicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="receiverId" source="receiverId" />
        <TextInput label="senderId" source="senderId" />
        <DateTimeInput label="sentAt" source="sentAt" />
      </SimpleForm>
    </Edit>
  );
};

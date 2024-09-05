import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BlockchainShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="blockData" source="blockData" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="hash" source="hash" />
        <TextField label="ID" source="id" />
        <TextField label="previousHash" source="previousHash" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

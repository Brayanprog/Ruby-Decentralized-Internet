import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BlockchainList } from "./blockchain/BlockchainList";
import { BlockchainCreate } from "./blockchain/BlockchainCreate";
import { BlockchainEdit } from "./blockchain/BlockchainEdit";
import { BlockchainShow } from "./blockchain/BlockchainShow";
import { DataTransferList } from "./dataTransfer/DataTransferList";
import { DataTransferCreate } from "./dataTransfer/DataTransferCreate";
import { DataTransferEdit } from "./dataTransfer/DataTransferEdit";
import { DataTransferShow } from "./dataTransfer/DataTransferShow";
import { DocumentationList } from "./documentation/DocumentationList";
import { DocumentationCreate } from "./documentation/DocumentationCreate";
import { DocumentationEdit } from "./documentation/DocumentationEdit";
import { DocumentationShow } from "./documentation/DocumentationShow";
import { PeerCommunicationList } from "./peerCommunication/PeerCommunicationList";
import { PeerCommunicationCreate } from "./peerCommunication/PeerCommunicationCreate";
import { PeerCommunicationEdit } from "./peerCommunication/PeerCommunicationEdit";
import { PeerCommunicationShow } from "./peerCommunication/PeerCommunicationShow";
import { IntegrationTestList } from "./integrationTest/IntegrationTestList";
import { IntegrationTestCreate } from "./integrationTest/IntegrationTestCreate";
import { IntegrationTestEdit } from "./integrationTest/IntegrationTestEdit";
import { IntegrationTestShow } from "./integrationTest/IntegrationTestShow";
import { FuturePlanningList } from "./futurePlanning/FuturePlanningList";
import { FuturePlanningCreate } from "./futurePlanning/FuturePlanningCreate";
import { FuturePlanningEdit } from "./futurePlanning/FuturePlanningEdit";
import { FuturePlanningShow } from "./futurePlanning/FuturePlanningShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ruby"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Blockchain"
          list={BlockchainList}
          edit={BlockchainEdit}
          create={BlockchainCreate}
          show={BlockchainShow}
        />
        <Resource
          name="DataTransfer"
          list={DataTransferList}
          edit={DataTransferEdit}
          create={DataTransferCreate}
          show={DataTransferShow}
        />
        <Resource
          name="Documentation"
          list={DocumentationList}
          edit={DocumentationEdit}
          create={DocumentationCreate}
          show={DocumentationShow}
        />
        <Resource
          name="PeerCommunication"
          list={PeerCommunicationList}
          edit={PeerCommunicationEdit}
          create={PeerCommunicationCreate}
          show={PeerCommunicationShow}
        />
        <Resource
          name="IntegrationTest"
          list={IntegrationTestList}
          edit={IntegrationTestEdit}
          create={IntegrationTestCreate}
          show={IntegrationTestShow}
        />
        <Resource
          name="FuturePlanning"
          list={FuturePlanningList}
          edit={FuturePlanningEdit}
          create={FuturePlanningCreate}
          show={FuturePlanningShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

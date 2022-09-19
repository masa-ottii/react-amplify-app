import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";

import { DataStore } from "@aws-amplify/datastore";
import { Kiji } from "./models";

Amplify.configure(awsExports);

export default function App() {
  (async () => {
    const models = await DataStore.query(Kiji);
    console.log(models);
  })();
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

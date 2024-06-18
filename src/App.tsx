import {
  Admin,
  Resource
} from "react-admin"
import AutosList from './Autos/AutosList'
import { authProvider } from "./authProvider"
import { dataProvider } from "./dataProvider"

export const App = () => (
  
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="autos"
      list={AutosList}
    />
  </Admin>
);

import { Layout } from "./Layout";
import {Header} from './Header'

function App() {
  return (
    <>
      <Layout
        footer={() => {}}
        header={<Header />}
        main={() => {}}
        nav={() => {}}
      />
    </>
  );
}

export default App;

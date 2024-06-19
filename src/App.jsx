import { Layout } from "./Layout";
import { Header } from "./screens/Header";
import ProductsScreen from "./screens/Products.screen";

function App() {
  return (
    <>
      <Layout
        footer={() => {}}
        header={<Header />}
        main={<ProductsScreen />}
        nav={() => {}}
      />
    </>
  );
}

export default App;

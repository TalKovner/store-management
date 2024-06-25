import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./Layout";
import { Header } from "./screens/Header";
import ProductsScreen from "./screens/Products.screen";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout
        footer={() => {}}
        header={<Header />}
        main={<ProductsScreen />}
        nav={() => {}}
      />
    </QueryClientProvider>
  );
}

export default App;
